import { rm } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const remove = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filesFolderPath = join(__dirname, 'files');
    const fileName = 'fileToRemove.txt';
    const filePath = join(filesFolderPath, fileName);

    await rm(filePath)
        .catch(() => {
            throw new Error('FS operation failed');
        });
};

remove();