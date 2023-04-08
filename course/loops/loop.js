'use strict';


// for loop

for (let i = 0; i < 5; i++) {
    console.log(i);
}


// for loop plus array

const myArray = ['first', 'second', 'third']

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}


// forEach 

myArray.forEach((el, index) => {console.log(`${el} - ${index}`)})


// while 

let counter = 0;

while (counter < 5) {
    console.log(counter);
    counter++;
}


// do while

counter = 5;

do {
    console.log(counter);
    counter++;
} while (counter < 5);


// for in 

const myObject = {age: 22, name: 'Test'}

for (let key in myObject) {
    console.log(`${key} - ${myObject[key]}`);
}


// for in plus array

for (const key in myArray) {
    console.log(myArray[key]);
}

