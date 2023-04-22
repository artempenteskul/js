'use strict';


function sumObjectValues(object) {
    let sumNumerical = 0;
    for (let key in object) {
        if (object.hasOwnProperty(key) && typeof object[key] === 'number') {
            sumNumerical += object[key];
        }
    }
    return sumNumerical;
}

const objectWithNumbers = {a: 10, b: 20, c: 'string', d: 12}  
const result = sumObjectValues(objectWithNumbers)
console.log(result)
  