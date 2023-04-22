'use strict';


function firstFunction(a, b) {
  return a + b
}
  
console.log(firstFunction);
  
firstFunction = 'test';
  
console.log(firstFunction);
  
//
  
const secondFunction = function (a, b) {
  return a + b
}

console.log(secondFunction);

// following code will raise an error
// secondFunction = 'test';
// console.log(secondFunction);
