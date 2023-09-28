//importin 2 modules;

const names = require('./2-modulesPT1');
const sayHi = require('./3-modulesPT2');

console.log(names);

sayHi('Susan');

sayHi(names.john);
sayHi(names.peter);