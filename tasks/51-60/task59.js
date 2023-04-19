'use strict';


class ExtendedArray extends Array {
    sum() {
      let elementsSum = 0;
      this.forEach(el => elementsSum += el);
      return elementsSum;
    }

    onlyNumbers() {
      return this.filter(el => typeof el === 'number');
    }
}

const myExtendedArray = new ExtendedArray(10, 4, 5)
console.log(myExtendedArray)

console.log(myExtendedArray.sum())

const myExtendedArray2 = new ExtendedArray('abc', 5, true, 25)
console.log(myExtendedArray2.onlyNumbers())

myExtendedArray2.forEach((el) => console.log(el))
