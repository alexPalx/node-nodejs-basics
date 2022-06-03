import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

export const list = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filesFolderPath = path.join(__dirname, 'files');

    let files = await fs.promises.readdir(filesFolderPath, { withFileTypes: true })
        .catch(() => {
            throw new Error('FS operation failed');
        });

    files = files
        .map(file => file.isDirectory() ?
            `${file.name} (folder)` : file.name);

    console.log(files);
};

list();