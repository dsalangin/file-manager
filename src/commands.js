import { sendToConsole } from "./utils.js";
import { showLocation } from './location.js';
import { processOsCommand } from "./os.js";

const commands = {
    up: { args: 0 },
    cd: { args: 1 },
    ls: { args: 0 },
    cat: { args: 1 },
    add: { args: 1 },
    mkdir: { args: 1 },
    rn: { args: 2 },
    cp: { args: 2 },
    mv: { args: 2 },
    rm: { args: 1 },
    hash: { args: 1 },
    compress: { args: 2 },
    decompress: { args: 2 },
    os: {
        args: 1,
        subcommands: [
            '--EOL',
            '--cpus',
            '--homedir',
            '--username',
            '--architecture',
        ],
    }

}

const validateCommand = (partsCommand) => {
    const commandRule = commands[partsCommand[0]];

    if (!commandRule) {
        return false;
    }

    if (commandRule.hasOwnProperty('args') && !(partsCommand.length - 1 === commandRule.args)) {
        return false;
    }

    if (partsCommand[0] === 'os' && !commandRule.subcommands.includes(partsCommand[1])) {
        return false;
    }

    return true;
}

export const processCommand = (command) => {
    const stringCommand = command.toString().trim();

    if (stringCommand === '.exit') {
        process.exit(0);
    }

    const partsCommand = stringCommand.split(/\s+/);
    const isValid = validateCommand(partsCommand);

    if (!isValid) {
        sendToConsole('Invalid input');
        showLocation();
        return;
    }

    const [mainCommand, ...args] = partsCommand;

    try {
        switch (mainCommand) {
            case 'os':
                processOsCommand(...args);
                break;

            default:
                sendToConsole('Switch def Invalid input');
        }
    } catch (err) {
        sendToConsole('Operation failed');
        throw err;
    } finally {
        showLocation();
    }
}
