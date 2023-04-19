'use strict';

function getMinMaxValues(...values) {
    return [Math.min(...values), Math.max(...values)]
}

let min, max;

[min, max] = getMinMaxValues(24, 5, 34, 10);

console.log(min);
console.log(max);

[min, max] = getMinMaxValues(18, 23, 103, 70, 80, 25);

console.log(min);
console.log(max);
