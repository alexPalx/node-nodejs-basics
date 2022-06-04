// Наверное, это не выполнено.

import { fork } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

export const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, 'files', 'script.js');

    const child = fork(filePath, args);

    process.stdin.on('data', (data) =>
        child.send(data.toString()));
};

spawnChildProcess(['arg1', 'arg2', 'arg3']);