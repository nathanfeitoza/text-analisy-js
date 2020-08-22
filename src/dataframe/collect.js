const neatCsv = require('neat-csv');

const fs = require('fs');
const { dirname } = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: dirname(__dirname) + '/dataframe/database2.csv',
    header: [
        {id: 'tweet', title: 'Tweet'},
        {id: 'sentimento', title: 'Sentimento'}
    ],
    separator: ";"
});

 
fs.readFile(dirname(__dirname) + '/dataframe/frame.csv', async (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  
  const dataT = await neatCsv(data, {separator: ";"});
  const dataSave = [];

  dataT.forEach((dt) => {
      dataSave.push({
          tweet: dt[Object.keys(dt)[1]],
          sentimento: dt.sentiment == '1' ? 'positivo' : 'potencial suicida'
      })
  })

  csvWriter.writeRecords(dataSave)
    .then(() => {
        console.log('...Done');
    });
})