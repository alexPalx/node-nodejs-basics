import { createReadStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

export const calculateHash = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filesFolderPath = join(__dirname, 'files');
    const fileName = 'fileToCalculateHashFor.txt';
    const filePath = join(filesFolderPath, fileName);

    const hash = createHash('sha256');

    const readStream = createReadStream(filePath);

    readStream.on('data', (data) => {
        hash.update(data);
    });

    readStream.on('end', () => {
        console.log(hash.digest('hex'));
    });
};

calculateHash();