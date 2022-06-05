import { access, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const create = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filesFolderPath = join(__dirname, 'files');
    const fileName = 'fresh.txt';
    const fileContent = 'I am fresh and young';
    const filePath = join(filesFolderPath, fileName);
    let fileExists = false;

    const fsError = new Error('FS operation failed');

    await access(filePath)
        .then(() =>
            fileExists = true)
        .catch(() =>
            writeFile(filePath, fileContent)
                .catch(() => {
                    throw fsError;
                }));

    if (fileExists)
        throw fsError;
};

create();