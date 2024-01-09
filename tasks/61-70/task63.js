'use strict';

const b = 2;
let d = 15;

function myFn1(a) {
  let b;
  let d = 10;
  myFn2(b);
}

function myFn2(a) {
  let c = 5;
  console.log(a, b, c, d);
}

myFn1();

// result - undefined, 2, 5, 15 -> there is no enclosing scope in js
