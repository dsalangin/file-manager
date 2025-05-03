import { createReadStream } from 'fs';
import { readdir, open, mkdir, rm } from 'fs/promises';
import { EOL } from 'os';
import { join } from 'path'
import { getLocation, getAbsolutePath } from "./location.js"
import { sendToConsole } from './utils.js';

const FILE_TYPE = {
    DIRECTORY: 'directory',
    FILE: 'file',
}

export const showFilesAndFolders = async () => {
    const location = getLocation();
    const files = await readdir(location, { withFileTypes: true });

    const filesData = files.sort((a, b) => (b.isDirectory() - a.isDirectory()) || (a.name.localeCompare(b.name)))
        .map((file, i) => {
            const isDir = file.isDirectory();
            const fileType = isDir ? FILE_TYPE.DIRECTORY : FILE_TYPE.FILE;
            const spaceAfterType = ' '.repeat(isDir ? 1 : FILE_TYPE.DIRECTORY.length - FILE_TYPE.FILE.length + 1);

            return `${i + 1}${i < 9 ? '  ' : ' '}| ${fileType}${spaceAfterType}| ${file.name}`
        })
        .join(EOL);

    sendToConsole(filesData);
}

export const showFileContent = async (pathToFile) => {
    return new Promise((res, rej) => {
        const fileStream = createReadStream(getAbsolutePath(pathToFile));
        fileStream.on('data', (chunk) => process.stdout.write(chunk));
        fileStream.on('end', () => {
            sendToConsole('');
            res();
        });
        fileStream.on('error', rej);
    });
}

export const addFile = async (fileName) => {
    await open(join(getLocation(), fileName), 'wx');
}

export const addFolder = async (folderName) => {
    await mkdir(join(getLocation(), folderName));
}

export const deleteFile = async (pathToFile) => {
    await rm(getAbsolutePath(pathToFile));
}