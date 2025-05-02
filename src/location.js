import { homedir as getHomedir } from 'os';
import { sendToConsole } from './utils.js'

const homeDir = getHomedir();
let location = homeDir;

export const showLocation = () => {
    sendToConsole(`You are currently in ${location}`);
}
