'use strict';


function isNumber(a) {
    return typeof a === 'number' ? `${a} is a number` : `${a} is not a number`
}
  
console.log(isNumber(10));
console.log(isNumber('hello'));
console.log(isNumber(true));
  