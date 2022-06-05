import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filesFolderPath = join(__dirname, 'files');
    const fileName = 'fileToRead.txt';

    const filePath = join(filesFolderPath, fileName);

    const fileContent = await readFile(filePath)
        .catch(() => {
            throw new Error('FS operation failed')
        });

    console.log(fileContent.toString());
};

read();