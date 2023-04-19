'use strict';


const processQuantities = ([minQty, maxQty, defaultQty=0]) => {
    console.log(minQty)
    console.log(maxQty)
    console.log(defaultQty)
    return defaultQty + maxQty - minQty
}
  

const inputQuantities1 = [8, 29, 10]
console.log(processQuantities(inputQuantities1)) // 31
  
const inputQuantities2 = [8, 29]
console.log(processQuantities(inputQuantities2)) // 21
