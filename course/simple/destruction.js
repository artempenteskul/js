'use strict';

const userProfile = {
    name: 'Artem',
    commentsQty: 23,
    hasSignedAgreement: false
}

const {name, commentsQty} = userProfile;
const hasSignedAgreement = userProfile.hasSignedAgreement;

console.log(name);
console.log(commentsQty);
console.log(hasSignedAgreement);

// 

const fruits = ['apple', 'banana', 'pineapple'];

const [fruitOne, fruitTwo] = fruits;

console.log(fruitOne);
console.log(fruitTwo);
