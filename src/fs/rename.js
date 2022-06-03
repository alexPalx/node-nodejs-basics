import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

export const rename = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filesFolderPath = path.join(__dirname, 'files');
    const fileName = 'wrongFilename.txt';
    const newFileName = 'properFilename.md';

    const filePath = path.join(filesFolderPath, fileName);
    const newFilePath = path.join(filesFolderPath, newFileName);

    await fs.promises.rename(filePath, newFilePath)
        .catch(() => {
            throw new Error('FS operation failed');
        });
};

rename();