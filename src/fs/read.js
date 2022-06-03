import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

export const read = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filesFolderPath = path.join(__dirname, 'files');
    const fileName = 'fileToRead.txt';

    const filePath = path.join(filesFolderPath, fileName);

    const fileContent = await fs.promises.readFile(filePath)
        .catch(() => {
            throw new Error('FS operation failed')
        });

    console.log(fileContent.toString());
};

read();