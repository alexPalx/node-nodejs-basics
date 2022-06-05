import { createReadStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

export const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filesFolderPath = join(__dirname, 'files');
    const fileName = 'fileToRead.txt';
    const filePath = join(filesFolderPath, fileName);

    const readStream = createReadStream(filePath);
    readStream.pipe(stdout);
};

read();