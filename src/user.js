import { sendToConsole } from './utils.js';

export const getUserName = () => {
    let userName = 'Some User';

    const userNameArg = process.argv.find((arg) => arg.startsWith('--username'));

    if (userNameArg) {
        userName = userNameArg.split('=')[1];
    }

    return userName;
}

export const sayHi = (userName) => {
    sendToConsole(`Welcome to the File Manager, ${userName}!`);
}

export const sayBye = (userName) => {
    sendToConsole(`Thank you for using File Manager, ${userName}, goodbye!`);
}