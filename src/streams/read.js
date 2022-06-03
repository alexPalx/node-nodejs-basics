import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

export const read = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filesFolderPath = path.join(__dirname, 'files');
    const fileName = 'fileToRead.txt';
    const filePath = path.join(filesFolderPath, fileName);

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(process.stdout);
};

read();