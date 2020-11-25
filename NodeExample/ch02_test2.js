console.log('argv 속성의 파라미터 수 : ' + process.argv.length);
console.dir(process.argv);

if(process.argv.length > 2){
    console.log('세 번째 파라미터의 값 : %s', process.argv[2]);
}
let i = 0;
for(const item of process.argv){
    console.log(i++ + " : ", item);
}
//for-of문은 index의 순서대로가 아닌 속성의 이름을 반복하여 순차적이지 않게 실행하기 때문에 index를 나타낼 i를 새로 만들어줌.
console.dir(process.env);
console.log("OS 환경 변수의 값 : " + process.env['OS']);