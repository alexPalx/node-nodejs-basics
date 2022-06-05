import { Transform, pipeline } from 'stream';
import { stdin, stdout } from 'process';

export const transform = async () => {
    console.log(`Hi. Please enter your text which I will print reversed.\nTo exit, press the key combination Ctrl + C.`);

    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            const reversedData = chunk
                .toString()
                .trim()
                .split('')
                .reverse()
                .join('');

            callback(null, `${reversedData}\n`);
        }
    });

    pipeline(
        stdin,
        transformStream,
        stdout,
        err => {
            throw new Error(err);
        }
    );
};

transform();