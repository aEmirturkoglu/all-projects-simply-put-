const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const { Module } = require('module');

// parametre 1 den fazla 2 yada fazla olunca message yanına virgül at belki ${} koy logiteme ve 
// myEmitter.emit('log', 'Log event emitted!') ve 'Log event emitted!' kısmının soluna bir virgül daha koy ve onuda yaz 'parametre' olarak

const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem);
    try {
      if (!fs.existsSync(path.join(__dirname, 'logs'))) {
        await fsPromises.mkdir(path.join(__dirname, 'logs'));
      }
      await fsPromises.appendFile(path.join(__dirname, 'logs', logName /*'eventLog(s).txt'*/), logItem)
    } catch (err) {
      console.error(err);
    }
}
//test
module.exports = logEvents;
// console. log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));