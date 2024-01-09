'use strict';


// ... three dots makes function accept indefinite parameters as array
// ... three dots also unpacking the array

function calculateMeanScore(...numbers) {
    if (numbers.some(num => typeof num !== 'number')) {
        throw new Error('All arguments should be numbers.')
    }

    let numbersSum = 0;
    numbers.forEach(el => numbersSum += el);
    return (numbersSum / numbers.length).toFixed(2);
}


const scores1 = [0, 1.5, 2.5, 3.7]
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2]
const scores3 = [1.3, 2.5, 1.9]
const scores4 = ['abc', 1.3, true, 2.5, 1.9]

console.log(calculateMeanScore(...scores1))

console.log(calculateMeanScore(...scores1, ...scores2))

console.log(calculateMeanScore(...scores1, ...scores2, ...scores3))

console.log(calculateMeanScore(...scores4))
