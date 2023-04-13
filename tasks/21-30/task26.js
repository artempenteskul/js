'use strict';


function fn() {
    console.log('Hello from fn function.')
  
    return function (a) {
      console.log(a)
    }
  }
  
  fn()(true)
