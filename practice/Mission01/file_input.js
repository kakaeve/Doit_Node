const fs = require('fs');

let input_file_name = './input.txt';

let temp = [];
//비동기로 했는데 안됨..
// fs.readFile(input_file_name, 'utf8', (err, data)=>{

//     if(err) throw err;
//     let arr = data.toString().split("\n");
//     for( i in arr){
//         console.log(i + " : " + arr[i]);
//         temp.push(arr[i].split(' ')[0]);
//     }
// });
// console.log(temp);
let arr = fs.readFileSync(input_file_name).toString().split('\n');
for(i in arr){
    temp.push(arr[i].split(' ')[0]);
}
console.log(temp);
let buf = new Buffer(temp.toString());
console.log(buf.toString());
module.exports = temp;