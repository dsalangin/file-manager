import { EOL } from 'os';

export const sendToConsole = (message) => {
    process.stdout.write(`${message}${EOL}`);
}