const myArray = [1, 3, 5];
console.log(myArray);

const newArray = myArray.map(el => el ** 3);

console.log(newArray);
console.log(myArray);

// 

const testArray = myArray.forEach(el => el ** 3); // forEach doesn't return any value

console.log(testArray);
console.log(myArray);
