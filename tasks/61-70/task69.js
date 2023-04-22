'use strict';


const countVolume = ({x, y, z}) => {
    return x * y * z;
}

const objectWithNumbers = {x: 5, y: 20, z: 3}
  
const result = countVolume(objectWithNumbers)
console.log(result)
  