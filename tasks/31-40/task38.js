'use strict'


const isArrayEmpty = (inputArray) => {
    return inputArray.length > 0 ? 'Array is not empty': 'Array is empty'
}


console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))
