import readline from 'readline-promise';

import processing from './codebase/processing.js'

const init = async () => {
    const readlineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const userData = await readlineInterface.questionAsync("Como você se sente? ");
    console.log('\n')

    readlineInterface.close()
    readlineInterface.removeAllListeners()
    
    return processing(userData);
}

init()
    .then((response) => { 
        console.log('Pelo seu texto analisamos que você é alguém: ', response)
    })
    .catch((err) => console.log(err));

export default {}