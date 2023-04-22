'use strict';

function sumPositiveNegative(nums) {
    let sumPositive = 0;
    let sumNegative = 0;

    nums.forEach(num => {
        num > 0 ? sumPositive += num : sumNegative += num;
    })

    return {positive: sumPositive, negative: sumNegative};
}

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

const result = sumPositiveNegative(nums);
console.log(result);
// { positive: 74, negative: -54 }
