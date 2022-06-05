import {
    createReadStream,
    createWriteStream
} from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';

export const compress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filesFolderPath = join(__dirname, 'files');
    const fileName = 'fileToCompress.txt';
    const compressedFileName = 'fileToCompress.txt.gz';
    const filePath = join(filesFolderPath, fileName);
    const compressedFilePath = join(filesFolderPath, compressedFileName);

    const gzip = createGzip();
    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(compressedFilePath);

    readStream
        .pipe(gzip)
        .pipe(writeStream);
};

compress();