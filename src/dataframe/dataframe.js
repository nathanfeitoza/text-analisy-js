import neatCsv from 'neat-csv'
import fs from 'fs'
import { dirname } from 'path'
import util from 'util'

const readFile = util.promisify(fs.readFile);

const readData = async () => {
    const dataFile = await readFile(
        dirname(__dirname) + '/dataframe/database.csv',
        'utf-8'
    );

    return await neatCsv(dataFile);
}

export default readData()