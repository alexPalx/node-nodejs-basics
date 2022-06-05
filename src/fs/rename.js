import { rename as fsRename } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const rename = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filesFolderPath = join(__dirname, 'files');
    const fileName = 'wrongFilename.txt';
    const newFileName = 'properFilename.md';

    const filePath = join(filesFolderPath, fileName);
    const newFilePath = join(filesFolderPath, newFileName);

    await fsRename(filePath, newFilePath)
        .catch(() => {
            throw new Error('FS operation failed');
        });
};

rename();