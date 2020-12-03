const winston = require('winston'); //로그 처리 모듈
const winstonDaily = require('winston-daily-rotate-file'); // 로그 일별 처리 모듈
const moment = require('moment');

function timeStampFormat(){
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
    //ex) '2016-05-01 20:14:28.500 +0900
};
//winston.logger는 이제 쓰이지 않아서 winston.createLogger로 대신함.
let logger = winston.createLogger({
    transpots : [
        new (winstonDaily)({
            name: 'info-file',
            filename: './log/server',
            dataPattern: '_yyy-MM-dd.log',
            colorize: false,
            maxsize: 50000000,
            maxFiles: 1000,
            level: 'info',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'debug-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ],
    exceptionHandlers: [
        new (winstonDaily)({
            name: 'exception-file',
            filename: './log/exception',
            dataPattern: '_yyy-MM-dd.log',
            colorize: false,
            maxsize: 50000000,
            maxFiles: 1000,
            level: 'error',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'exception-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ]
});