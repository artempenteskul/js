'use strict';

let i = 1;

const intervalMessageId = setInterval(() => {
    console.log(`Message - ${i}.`);
    i += 1;
}, 2000)

setTimeout(() => clearInterval(intervalMessageId), 11000)
