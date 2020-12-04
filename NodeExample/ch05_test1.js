const http = require('http');

//웹 서버 객체를 만듭니다.
let server = http.createServer();

//웹 서버를 시작하여 3000번 포트에서 대기합니다.

// server.listen(port, ()=>{
//     console.log('웹 서버가 시작되었습니다. : %d', port);
// });

//웹 서버를 시작하여 192.168.75.96 IP와 3000번 포트에서 대기하도록 설정합니다.
let host = '192.168.75.96';//내 ip와 맞춤.
let port = 3000;
server.listen(port, host, '50000', ()=>{
    console.log('웹 서버가 시작되었습니다. : %s, %d',host, port);
});