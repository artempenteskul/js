'use strict';


function getArraySortInfo(inputArray) {
    if (inputArray.some(el => typeof el !== 'number')) {
        return 'Some of the array elements are not a number.'
    }

    if (inputArray.every((el, el_n) => el_n > 0 ? el >= inputArray[el_n - 1] : true)) {
        return 'Array is sorted in ascending order.'
    }

    if (inputArray.every((el, el_n) => el_n > 0 ? el <= inputArray[el_n - 1] : true)) {
        return 'Array is sorted in descending order.'
    }

    return 'Array is not sorted at all.'
}


const a = [5, 'abc', 10, 1]
const b = [4, 10, 14, 25, 25, 50]
const c = [150, 132, 80, 40]
const d = [15, 26, 10, 23, 85]

console.log(getArraySortInfo(a)) 
console.log(getArraySortInfo(b)) 
console.log(getArraySortInfo(c)) 
console.log(getArraySortInfo(d))
