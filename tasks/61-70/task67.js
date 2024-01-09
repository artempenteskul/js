'use strict';


function multiplyBy(a, multiplier = 2) {
    console.log(a * multiplier);
}


multiplyBy(2);
multiplyBy(2, undefined);
multiplyBy(2, 0);
multiplyBy(5, 10);
