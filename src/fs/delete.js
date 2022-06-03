import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

export const remove = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filesFolderPath = path.join(__dirname, 'files');
    const fileName = 'fileToRemove.txt';
    const filePath = path.join(filesFolderPath, fileName);

    await fs.promises.rm(filePath)
        .catch(() => {
            throw new Error('FS operation failed');
        });
};

remove();