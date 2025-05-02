import { getUserName, sayHi, sayBye } from './user.js';
import { showLocation } from './location.js';
import { sendToConsole } from './utils.js';
import {processCommand} from './commands.js';

const userName = getUserName();

process.on('exit', () => {
    sayBye(userName);
});

process.on('SIGINT', () => {
    process.exit(0);
});

process.on('SIGTERM', () => {
    process.exit(0);
});

sayHi(userName);
showLocation();
sendToConsole('Please enter command');

process.stdin.on('data', (command) => {
    processCommand(command);
});