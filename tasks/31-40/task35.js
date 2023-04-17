'use strict';

const myObject = {
    key1: true,
    key5: 10,
    key3: 'abc',
    key4: null,
    key10: NaN,
}
  

for (let k in myObject) {
    if (k === 'key1' || k === 'key3') {
        console.log(myObject[k]);
    }
}
