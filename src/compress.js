import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { access } from 'fs/promises';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { getAbsolutePath } from './location.js';
import { checkFileNotExists } from './fs.js';

export const compressFile = async (sourcePath, targetPath) => {
    const sourceAbsolutePath = getAbsolutePath(sourcePath);
    const targetAbsolutePath = getAbsolutePath(targetPath);

    await access(sourceAbsolutePath);
    await checkFileNotExists(targetAbsolutePath);

    await pipeline(
        createReadStream(sourceAbsolutePath),
        createBrotliCompress(),
        createWriteStream(targetAbsolutePath),
    );
}

export const decompressFile = async (sourcePath, targetPath) => {
    const sourceAbsolutePath = getAbsolutePath(sourcePath);
    const targetAbsolutePath = getAbsolutePath(targetPath);

    await access(sourceAbsolutePath);
    await checkFileNotExists(targetAbsolutePath);

    await pipeline(
        createReadStream(sourceAbsolutePath),
        createBrotliDecompress(),
        createWriteStream(targetAbsolutePath),
    )
}
