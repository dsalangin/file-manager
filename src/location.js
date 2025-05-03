import { homedir as getHomedir } from 'os';
import { sendToConsole } from './utils.js'

export const homeDir = getHomedir();
let location = homeDir;

export const showLocation = () => {
    sendToConsole(`You are currently in ${location}`);
}
