const person = {
    name: 'Bob', 
    age: 25
}

const person2 = Object.assign({}, person);

person2.age = 26;

console.log(person2.age);
console.log(person.age);

const person3 = { ...person }

person3.name = 'Alice';

console.log(person3.name);
console.log(person.name);

const person4 = JSON.parse(JSON.stringify(person));

person4.name = 'Roger';

console.log(person4.name);
console.log(person.name);
