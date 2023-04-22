'use strict';


const cars = [{ brand: 'Honda', price: 13000 }, { brand: 'Rolls-Royce', price: 120000 }]
  

const getCarInfo = ({brand, price}) => {
    return `Price for the car ${brand} - ${price} and this is ${price <= 20000 ? 'cheap' : 'expensive'} car.`
}
  
cars.forEach((car) => console.log(getCarInfo(car)))
 