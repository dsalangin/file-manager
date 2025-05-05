import { homedir as getHomedir } from 'os';
import { resolve as pathResolve, relative as pathRelative, isAbsolute, dirname } from 'path';
import { access, constants } from 'fs/promises';
import { sendToConsole } from './utils.js';
import { isDirectory } from './fs.js';

export const homeDir = getHomedir();
let location = homeDir;

export const showLocation = () => {
    sendToConsole(`You are currently in ${location}`);
}

export const goUp = () => {
    location = pathResolve(location, '../');
}

export const checkDirectoryExists = async (pathToDir) => {
    try {
        await access(pathToDir, constants.F_OK);
        return true;
    } catch {
        return false;
    }
}

export const getAbsolutePath = (targetPath) => {
    return isAbsolute(targetPath) ? targetPath : pathResolve(location, targetPath);
}

export const goTo = async (pathToDir) => {
    const currentLocation = location;
    location = getAbsolutePath(pathToDir);

    if (!(await isDirectory(location))) {
        location = currentLocation;
        throw new Error('Path to file specified');
    }

    const isDirectoryExists = await checkDirectoryExists(location);

    if (!isDirectoryExists) {
        location = currentLocation;
        throw new Error('Path is not exist');
    }
}

export const getLocation = () => {
    return location;
} 