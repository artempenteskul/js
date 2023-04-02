const myCity = {
    city: 'New York',
}

console.log(myCity);

myCity.popular = true;

console.log(myCity);

myCity.country = 'USA';

console.log(myCity);
 
myCity.test = 'test';

delete myCity.test;

console.log(myCity);

myCity.coordinates = {x: 213.12, y: 32.11};

console.log(myCity);

// console.log(myCity.coordinates.x);
