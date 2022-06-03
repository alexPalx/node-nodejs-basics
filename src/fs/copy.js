import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

export const copy = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const sourceFolderPath = path.join(__dirname, 'files');
    const destinationFolderPath = path.join(__dirname, 'files_copy');

    await fs.promises.mkdir(destinationFolderPath)
        .then(() =>
            fs.promises.cp(sourceFolderPath, destinationFolderPath, { recursive: true }))
        .catch(() => {
            throw new Error('FS operation failed');
        });
};

copy();