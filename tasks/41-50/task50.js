'use strict';

const formTemplateLiteral = (num) => {
    return `Number ${num}
This number is ${num >= 10 ? 'more or equal 10' : 'less than 10'}.
The square root of this number is ${Math.sqrt(num)}.`
}

const myNumber = 9;
console.log(formTemplateLiteral(myNumber));

console.log('===')

const myAnotherNumber = 25;
console.log(formTemplateLiteral(myAnotherNumber));
