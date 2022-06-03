import * as stream from 'stream';

export const transform = async () => {
    const transformStream = new stream.Transform({
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

    stream.pipeline(
        process.stdin,
        transformStream,
        process.stdout,
        err => {
            throw new Error(err);
        }
    );
};

transform();