'use strict';


const cars = [{ brand: 'Honda', price: 13_000 }, { brand: 'Rolls-Royce', price: 120_000 }]
  

const getCarInfo = ({brand, price}) => {
    return `Price for the car ${brand} - ${price} and this is ${price <= 20_000 ? 'cheap' : 'expensive'} car.`
}
  
cars.forEach((car) => console.log(getCarInfo(car)))
 