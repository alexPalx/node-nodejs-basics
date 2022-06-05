/* ¯\_(ツ)_/¯ 
    У меня не вышло написать скрипт с переменными окружения
    Придется запускать это так:
    RSS_name1=value1 RSS_name2=value2 node src/cli/env
*/

export const parseEnv = () => {
    const filteredKeys = Object.keys(process.env)
        .filter(key => key.startsWith('RSS_'))
        .map(key => `${key}=${process.env[key]}`)
        .join('; ');
    
    if (filteredKeys.length === 0) {
        console.warn('Please use "RSS_name1=value1 RSS_name2=value2 node src/cli/env".\nNPM script doesn\'t work.');
        return;
    }
    console.log(filteredKeys);
};


parseEnv();