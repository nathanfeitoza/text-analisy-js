import bayes from 'bayes'

import dataframe from '../dataframe/dataframe.js'

const classifier = bayes()

const learnData = async () => {
    (await dataframe).forEach(async (data) => {
        await classifier.learn(data.Tweet, data.Sentimento)
    })
}

const processing = async function(analyse) {
    await learnData();

    return await classifier.categorize(analyse);
}

export default processing