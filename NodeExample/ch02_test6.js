//import * as nconf from './node_modules/nconf/usage.js';
//import 했더니 Error: Cannot add store with unknown type: global와 같은 에러가 났다. 흠...
const nconf = require('nconf');
nconf.env();

console.log("OS환경 변수의 값 : %s ", nconf.get('OS'));