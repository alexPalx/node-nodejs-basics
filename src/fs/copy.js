import { mkdir, cp } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const copy = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const sourceFolderPath = join(__dirname, 'files');
    const destinationFolderPath = join(__dirname, 'files_copy');

    await mkdir(destinationFolderPath)
        .then(() =>
            cp(sourceFolderPath, destinationFolderPath, { recursive: true }))
        .catch(() => {
            throw new Error('FS operation failed');
        });
};

copy();