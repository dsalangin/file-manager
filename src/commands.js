import { sendToConsole } from "./utils.js";

const { log } = console;

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

export const processCommand = (command) => {
    const stringCommand = command.toString().trim();

    if(stringCommand === '.exit') {
        process.exit(0);
    }

    const clearCommand = validateCommand(stringCommand);

    if (!clearCommand) {
        sendToConsole('Invalid input');
        return;
    }
}

const validateCommand = (command) => {
    const partsCommand = command.split(/\s+/);

    const commandRule = commands[partsCommand[0]];

    if (!commandRule) {
        return;
    }

    if (commandRule.hasOwnProperty('args') && !(partsCommand.length - 1 === commandRule.args)) {
        return;
    }

    if (partsCommand[0] === 'os' && !commandRule.subcommands.includes(partsCommand[1])) {
        return;
    }

        return partsCommand.join(' ');
}