import { EOL, cpus, userInfo, arch } from 'os';
import { homeDir } from "./location.js";
import { sendToConsole } from "./utils.js";

const showEOL = () => {
    sendToConsole(JSON.stringify(EOL))
}

const showCpusInfo = () => {
    const allCpus = cpus();
    const cpusInfo = allCpus.map((cpu, i) => {
        return `${i + 1} model: ${cpu.model} speed: ${(cpu.speed / 1000).toFixed(2)} GHz`;
    })

    sendToConsole(`Cpus count: ${allCpus.length}${EOL}${cpusInfo.join(EOL)}`);
}

const showHomedir = () => {
    sendToConsole(homeDir);
}

const showUserName = () => {
    sendToConsole(userInfo().username);
}

const showArchitecture = () => {
    sendToConsole(arch());
}


export const processOsCommand = (command) => {
    switch (command) {
        case '--EOL':
            showEOL();
            break;

        case '--cpus':
            showCpusInfo();
            break;

        case '--homedir':
            showHomedir();
            break;

        case '--username':
            showUserName();
            break;

        case '--architecture':
            showArchitecture();
            break;

        default:
            sendToConsole('');
    }
}