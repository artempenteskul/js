'use strict';


class CustomArray extends Array {
    customPush(newElement) {
        this[this.length] = newElement;
        console.log(`Element ${newElement} was added.`);
    }
}

const testArray = new CustomArray(1, 3, 4);
testArray.customPush(2);
console.log(testArray.length);
console.log(testArray);
