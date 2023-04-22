'use strict';


class Fruit {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    getFruitInfo() {
        return `Price of the ${this.title} is $${this.price}.`
    }
}

const apple = new Fruit('Apple', 2);
console.log(apple.getFruitInfo());

const orange = new Fruit('Orange', 3);
console.log(orange.getFruitInfo());
