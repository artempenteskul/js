'use strict';


// for loop
console.log('=== for loop ===')

for (let i = 0; i < 5; i++) {
    console.log(i);
}


// for loop plus array
console.log('=== for loop plus array ===')

const myArray = ['first', 'second', 'third']

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}


// forEach
console.log('=== foreach loop ===')

myArray.forEach((el, index) => {console.log(`${el} - ${index}`)})


// while 
console.log('=== while loop ===')

let counter = 0;

while (counter < 5) {
    console.log(counter);
    counter++;
}


// do while
console.log('=== do while loop ===')

counter = 5;

do {
    console.log(counter);
    counter++;
} while (counter < 5);


// for in
console.log('=== for in loop ===')

const myObject = {age: 22, name: 'Test'}

for (let key in myObject) {
    console.log(`${key} - ${myObject[key]}`);
}


// for in plus array
console.log('=== for in loop plus array ===')

for (const key in myArray) {
    console.log(myArray[key]);
}


// for of
console.log('=== for or loop ===')

const myString = 'hey!'

for (const letter of myString) { 
    console.log(letter);
}
