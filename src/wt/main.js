import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const performCalculations = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const workerFileName = 'worker.js';
    const workerFilePath = join(__dirname, workerFileName);
    const promises = [];

    for (let i = 0; i < cpus().length; ++i) {
        promises.push(new Promise((resolve, reject) => {
            const worker = new Worker(workerFilePath, { workerData: i + 10 });
            worker.on('message', result => {
                resolve({ status: 'resolved', data: result });
            });
            worker.on('error', () => {
                reject({ status: 'error', data: null })
            });
        }));
    }

    Promise.all(promises)
        .then(values => {
            console.log(values);
        }, reason => {
            console.log(reason);
            return null;
        });
};

performCalculations();