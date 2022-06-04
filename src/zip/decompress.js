import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';
import * as zlib from 'zlib';

export const decompress = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filesFolderPath = path.join(__dirname, 'files');
    const fileName = 'fileToCompress.txt.gz';
    const decompressedFileName = 'fileToCompress.txt';
    const filePath = path.join(filesFolderPath, fileName);
    const decompressedFilePath = path.join(filesFolderPath, decompressedFileName);

    const unzip = zlib.createUnzip();
    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(decompressedFilePath);

    readStream
        .pipe(unzip)
        .pipe(writeStream);
};

decompress();