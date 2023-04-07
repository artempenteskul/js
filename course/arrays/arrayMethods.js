'use strict';

const myArray = [1, 2, 3];
console.log(myArray);

myArray.push(4);
console.log(myArray);

myArray.push(true);
console.log(myArray);

console.log(myArray.length);

const removedElement = myArray.pop()
console.log(removedElement);
console.log(myArray);
console.log(myArray.length);

myArray.unshift(false);
myArray.unshift('abc');
console.log(myArray);
console.log(myArray.length);

myArray.shift()
console.log(myArray);
console.log(myArray.length);

