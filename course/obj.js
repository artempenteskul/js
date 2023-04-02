const objectA = {
    a: 10,
    b: true
}

console.log(objectA);

const copyOfA = objectA;

copyOfA.a = 22;

console.log(objectA);
