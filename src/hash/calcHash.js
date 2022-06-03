import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';
import * as crypto from 'crypto';

export const calculateHash = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filesFolderPath = path.join(__dirname, 'files');
    const fileName = 'fileToCalculateHashFor.txt';

    const filePath = path.join(filesFolderPath, fileName);

    const hash = crypto.createHash('sha256');

    const readStream = fs.createReadStream(filePath);

    readStream.on('data', (data) => {
        hash.update(data);
    });

    readStream.on('end', () => {
        console.log(hash.digest('hex'));
    });
};

calculateHash();