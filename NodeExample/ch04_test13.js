const fs = require('fs');
const http = require('http');
let server = http.createServer((req,res)=>{
    //파일을 읽어 응답 스트림과 pipe()로 연결합니다.
    let instream = fs.createReadStream('./output.txt','utf8');
    instream.pipe(res);
});
server.listen(7001, '127.0.0.1');