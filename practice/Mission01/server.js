const fs = require('fs');
const http = require('http');

let file_input = require('./file_input.js');

let server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain;  charset=utf-8'});
    //직접 res객체에 썼다. utf8을 쓰지 않으면 한글이 깨진다.
    for( i in file_input){
        res.write(i + ' : ' + file_input[i] + ' \n');
    }
    res.end();
    
});

server.listen(7001, '127.0.0.1');