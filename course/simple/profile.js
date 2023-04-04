'use strict';

const name = 'Artem';
const postsQty = 23

const userProfile = {
    name,
    postsQty,
    hasSignedAgreement: false,
    sayHello: function () {
        console.log('Hello!');
    }
}

console.log(userProfile);

userProfile.sayHello();
