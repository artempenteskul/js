const person = {
    name: 'Bob',
    age: 33,
}

function increasePersonAge(person) {
    person.age += 1;
    return person
}

increasePersonAge(person);

console.log(person.age);
