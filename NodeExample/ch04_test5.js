const fs = require('fs');

//파일을 동기식 IO로 읽어 들입니다.
let data = fs.readFileSync('./package.json','utf8');

//읽어들인 데이터를 출력합니다.
console.log(data);