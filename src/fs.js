import { readdir } from 'fs/promises';
import { getLocation } from "./location.js"
import { sendToConsole } from './utils.js';
import { EOL } from 'os';

const FILE_TYPE = {
    DIRECTORY: 'directory',
    FILE: 'file',
}

export const showFilesAndFolders = async () => {
    const location = getLocation();
    const files = await readdir(location, { withFileTypes: true });

    // files.forEach((file) => sendToConsole(file.isDirectory()));

    const filesData = files.sort((a, b) => (b.isDirectory() - a.isDirectory()) || (a.name.localeCompare(b.name)))
        .map((file, i) => {
            const isDir = file.isDirectory();
            const fileType = isDir ? FILE_TYPE.DIRECTORY : FILE_TYPE.FILE;
            const spaceAfterType =  ' '.repeat(isDir ? 1 : FILE_TYPE.DIRECTORY.length - FILE_TYPE.FILE.length + 1);

            return `${i + 1}${i < 9 ? '  ' : ' '}| ${fileType}${spaceAfterType}| ${file.name}`
        })
        .join(EOL);

    sendToConsole(filesData);
}