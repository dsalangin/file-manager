import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { sendToConsole } from './utils.js';
import { getAbsolutePath } from './location.js';


export const showHash = async (filePath) => {
    const targetPath = getAbsolutePath(filePath);

    const readStream = createReadStream(targetPath);
    const hash = createHash('SHA256');

    readStream.on('data', (chunk) => {
        hash.update(chunk);
    });

    return new Promise((res, rej) => {
        readStream.on('end', () => {
            sendToConsole(hash.digest('hex'));
            res();
        });

        readStream.on('error', rej);
    });
}