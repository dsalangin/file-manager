import { getUserName, sayHi, sayBye } from './user.js';

const { log } = console;

const userName = getUserName();

process.on('exit', () => {
    sayBye(userName)
});

process.on('SIGINT', () => {
    process.exit(0);
});

process.on('uncaughtException', (err) => {
    throw err;
});

sayHi(userName);
