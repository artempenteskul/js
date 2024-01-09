function multiplyByFactor(value, multiplier = 1) {
    return value * multiplier;
}

console.log(multiplyByFactor(5, 2));
console.log(multiplyByFactor(5));


const multiplyByFactor1 = function(value, multiplier = 1) {
    return value * multiplier;
}

console.log(multiplyByFactor1(5, 22));
console.log(multiplyByFactor(5));


const multiplyByFactor2 = (value, multiplier = 1) => value * multiplier;

console.log(multiplyByFactor2(55, 4));
console.log(multiplyByFactor2(5));
