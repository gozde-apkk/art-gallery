const {format} = require("date-fns");
const {v4 : uuid} = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises
const path = require("path");


// const logEvents = async (message, logFileName) =>{
//     const dateTime = `${format(new Date(), 'yyyyMMdd/tHH:mm:ss')}`
//     const logItem = `${dateTime}/t${uuid()}/t${message}`
//     const directory = __dirname; 

//     try{
//         if(!fs.existsSync(path.join(directory, '..', 'logs', logFileName),logItem)){
//             await fsPromises.mkdir(path.join(directory, '..','logs'))
//         }
//         await fsPromises.appendFile(path.join(directory,'..','logs'))
//     }catch(err){
//         console.log(err);
//     }
// }
const logEvents = async (message, logFileName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd/tHH:mm:ss')}`;
    const logItem = `${dateTime}/t${uuid()}/t${message}`;
    const directory = __dirname;

    try {
        const logFilePath = path.join(directory, '..', 'logs', logFileName);

        if (!fs.existsSync(path.join(directory, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(directory, '..', 'logs'));
        }

        await fsPromises.appendFile(logFilePath, logItem + '\n'); // Append data to the file

    } catch (err) {
        console.log(err);
    }
};

const logger = (req, res ,next) =>{
    logEvents(`${req.method}/t${req.url}/t${req.headers.origin}`,'reqLog.log' )
    console.log(`${req.method} ${req.path}`)

    next()
}

module.exports = {logEvents, logger}
