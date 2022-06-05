import { createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { stdin } from 'process';

export const write = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filesFolderPath = join(__dirname, 'files');
    const fileName = 'fileToWrite.txt';
    const filePath = join(filesFolderPath, fileName);

    const writeStream = createWriteStream(filePath);
    console.log(`Hello. Please enter your own text, which will be written to the file "${fileName}".\nTo exit, press the key combination Ctrl + C.`);

    stdin.on('data', (data) =>
        writeStream.write(data));


};

write();