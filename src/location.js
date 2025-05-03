import { homedir as getHomedir } from 'os';
import { resolve as pathResolve, relative as pathRelative, isAbsolute } from 'path';
import { access, constants } from 'fs/promises';
import { sendToConsole } from './utils.js';

export const homeDir = getHomedir();
let location = homeDir;

export const showLocation = () => {
    sendToConsole(`You are currently in ${location}`);
}

const checkHomeDirectoryContainment = () => {
    return !pathRelative(homeDir, location).startsWith('..');
}

export const goUp = () => {
    location = pathResolve(location, '../');
    const isInsideHome = checkHomeDirectoryContainment();

    if (!isInsideHome) {
        location = homeDir;
    }
}

const checkDirectoryExists = async (pathToDir) => {
    try {
        await access(pathToDir, constants.F_OK);
        return true;
    } catch {
        return false;
    }
}

export const goTo = async (pathToDir) => {
    const currentLocation = location;
    location = isAbsolute(pathToDir) ? pathToDir : pathResolve(location, pathToDir);

    const isInsideHome = checkHomeDirectoryContainment();

    if (!isInsideHome) {
        location = homeDir;
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