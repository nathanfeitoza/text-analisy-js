import processing from './codebase/processing.js'

processing('Eu teste').then((response) => {
    console.log(response)
}).catch((err) => console.log('Error try prediction: ', err))