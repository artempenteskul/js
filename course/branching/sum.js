'use strict';

const sum = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One or both of numbers are not a numbers.'
    }

    return a + b;
}

let res = sum(5, 'abc');
console.log(res);

res = sum(33, 13);
console.log(res);
