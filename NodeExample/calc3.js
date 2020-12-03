const { listeners } = require('cluster');
const util = require('util');
const EventEmitter = require('events').EventEmitter;

let Calc = function(){
    let self = this;

    this.on('stop', function(){
        console.log('Clac에 stop event 전달됨.');
    });
};
//화살표 함수를 쓰려고 했지만 prototype의 경우 화살표함수를 쓸 떄 오류가 날 수 있어서 function으로 통일함.
util.inherits(Calc, EventEmitter);

Calc.prototype.add = function(a,b){
    return a+b;
}

module.exports = Calc;
module.exports.title = 'calculator';