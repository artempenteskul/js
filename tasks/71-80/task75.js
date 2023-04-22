'use strict';

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

for (let char of str) {
    if (vowels.includes(char)) {
        vowelsCount += 1;
    }
}

console.log(vowelsCount)
