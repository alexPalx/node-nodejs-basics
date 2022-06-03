import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

export const create = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filesFolderPath = path.join(__dirname, 'files');
    const fileName = 'fresh.txt';
    const fileContent = 'I am fresh and young';
    const filePath = path.join(filesFolderPath, fileName);
    let fileExists = false;

    await fs.promises.access(filePath)
        .then(() =>
            fileExists = true)
        .catch(() =>
            fs.promises.writeFile(filePath, fileContent)
                .catch(() => {
                    throw new Error('FS operation failed');
                }));

    if (fileExists)
        throw new Error('FS operation failed');
};

create();