'use strict';

function areArraysEqual(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    
    if (firstArray.every((el, el_n) => el === secondArray[el_n])) {
        return true;
    }

    return false;
}

const a = [1, 2, 3]
const b = [1, 2, 3]

const c = [2, 1, 3]
const d = [1, 2, 3, 4]

console.log(areArraysEqual(a, b)) // true
console.log(areArraysEqual(a, c)) // false
console.log(areArraysEqual(a, d)) // false
