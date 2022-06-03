import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

export const write = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filesFolderPath = path.join(__dirname, 'files');
    const fileName = 'fileToWrite.txt';
    const filePath = path.join(filesFolderPath, fileName);

    const writeStream = fs.createWriteStream(filePath);
    console.log(`Hello. Please enter your own text, which will be written to the file "${fileName}".\nTo exit, press the key combination Ctrl + C.`);

    process.stdin.on('data', (data) =>
        writeStream.write(data));


};

write();