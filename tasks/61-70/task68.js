'use strict';

function square(a) {
  if (a === undefined) {
    throw new Error('Function square should have an argument.');
  }

  if (arguments.length === 0) {
    throw new Error('Function square should have an argument.')
  }

  console.log(a * a)
}
  
square(10);
  
square();
