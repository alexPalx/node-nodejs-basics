export const parseArgs = () => {
    const args = [];

    for (let i = 2; i < process.argv.length; ++i) {
        if (process.argv[i].startsWith('--')) {
            args.push({ property: process.argv[i].slice(2), value: null });
            if (process.argv[i + 1] && !process.argv[i + 1].startsWith('--')) {
                args[args.length - 1].value = process.argv[i + 1];
            }
        }
    }

    const argsString = args
        .map(pair => `${pair.property} is ${pair.value}`)
        .join(', ');
    
    console.log(argsString);
};

parseArgs();