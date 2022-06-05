import {
    createReadStream,
    createWriteStream
} from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createUnzip } from 'zlib';

export const decompress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filesFolderPath = join(__dirname, 'files');
    const fileName = 'fileToCompress.txt.gz';
    const decompressedFileName = 'fileToCompress.txt';
    const filePath = join(filesFolderPath, fileName);
    const decompressedFilePath = join(filesFolderPath, decompressedFileName);

    const unzip = createUnzip();
    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(decompressedFilePath);

    readStream
        .pipe(unzip)
        .pipe(writeStream);
};

decompress();