function multByFactor(value, multiplier = 1) {
    return value * multiplier;
}

console.log(multByFactor(5, 2));
console.log(multByFactor(5));


const multByFactor1 = function(value, multiplier = 1) {
    return value * multiplier;
}

console.log(multByFactor1(5, 22));
console.log(multByFactor(5));


const multByFactor2 = (value, multiplier = 1) => value * multiplier;

console.log(multByFactor2(55, 4));
console.log(multByFactor2(5));
