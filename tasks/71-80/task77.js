'use strict';


function createGreeting() {
    let greetingString = 'Hey, this is';
    
    const greet = (name) => {
        return greetingString + ' ' + name;
    } 

    const changeGreeting = (newGreetingString) => {
        greetingString = newGreetingString;
    } 

    return {greet, changeGreeting}
}


const greeting1 = createGreeting();
console.log(greeting1.greet('Bob'));
greeting1.changeGreeting('Good Morning from');
console.log(greeting1.greet('Emily'));

const greeting2 = createGreeting();
console.log(greeting2.greet('Emily'));
