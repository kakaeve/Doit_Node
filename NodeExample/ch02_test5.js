import * as calc from './calc.js';
import {calc as calc2}  from './calc2.js';

console.log("모듈로 분리한 후 -calc.add함수 호출 결과 : %d", calc.add(10,10));

const calc3 = new calc2();
//함수가 아닌 calss 자체를 가져왔기 때문에 선언 후 사용.
console.log("모듈로 분리한 후 -calc2.add함수 호출 결과 : %d", calc3.add(10,10));