'use strict';

const MIN = 1000;
const MAX = 9999;

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351]

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const addRandomNumberToArray = (min, max, arr) => {
    let randomNumber;
    const updatedArray = [...arr];

    do {
        randomNumber = getRandomNumber(min, max);
    } while (randomNumber in updatedArray)

    updatedArray.push(randomNumber);
    return updatedArray;
}

const updatedMyNumbers = addRandomNumberToArray(MIN, MAX, myNumbers);

console.log(`Original array - ${myNumbers}`);
console.log(`Updated array - ${updatedMyNumbers}`);
