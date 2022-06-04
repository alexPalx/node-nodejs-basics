import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';
import * as zlib from 'zlib';

export const compress = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filesFolderPath = path.join(__dirname, 'files');
    const fileName = 'fileToCompress.txt';
    const compressedFileName = 'fileToCompress.txt.gz';
    const filePath = path.join(filesFolderPath, fileName);
    const compressedFilePath = path.join(filesFolderPath, compressedFileName);

    const gzip = zlib.createGzip();
    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(compressedFilePath);

    readStream
        .pipe(gzip)
        .pipe(writeStream);
};

compress();