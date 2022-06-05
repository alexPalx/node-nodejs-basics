import { readdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const list = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filesFolderPath = join(__dirname, 'files');

    let files = await readdir(filesFolderPath, { withFileTypes: true })
        .catch(() => {
            throw new Error('FS operation failed');
        });

    files = files
        .map(file => file.isDirectory() ?
            `${file.name} (folder)` : file.name);

    console.log(files);
};

list();