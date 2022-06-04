import * as path from 'path';
import * as url from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { createRequire } from 'module';
import './files/c.js';

const require = createRequire(import.meta.url)
const __dirname = url.fileURLToPath(import.meta.url);
const __filename = path.dirname(__dirname);
const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = require('./files/a.json');
} else {
    unknownObject = require('./files/b.json');
}

console.log(`
Release ${release()}
Version ${version()}
Path segment separator is "${path.sep}"
Path to current file is ${__filename}
Path to current directory is ${__dirname}
`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};
