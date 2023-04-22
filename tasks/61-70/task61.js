'use strict';


const sumNumbers = (...numbers) => {
    const sum = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0)

    console.log(`Sum of the numbers is ${sum}.`);
    return sum;
}


console.log(sumNumbers(1, 3));
console.log(sumNumbers(10, 20, 5));
console.log(sumNumbers(2, 5, 80, 1, 10, 12));
