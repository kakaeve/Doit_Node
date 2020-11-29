const os = require('os');
//import는 module폴더를 보지 않기 떄문에 그냥 require를 사용할 예정
console.log('시스템의 hosw name : %s',os.hostname());
console.log('시스템의 메모리 : %d / %d',os.freemem(),os.totalmem());
console.log('시스템의 CPU 정보\n');
console.dir(os.cpus());
console.log('시스템의 네트워크 인터페이스 정보');
console.dir(os.networkInterfaces());