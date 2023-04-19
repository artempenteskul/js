'use strict';

// function getWeatherForecast(city, weather) {
//     if (weather === undefined) {
//         weather = 'Good'
//     }
//     return `Weather forecast for ${city} - ${weather}`
// }


function getWeatherForecast(city, weather = 'Good') {
    return `Weather forecast for ${city} - ${weather}`
}

console.log(getWeatherForecast('Dubai', 'Sunny'))
console.log(getWeatherForecast('London', 'Rainy'))
console.log(getWeatherForecast('Paris'))
console.log(getWeatherForecast('Miami', ''))
console.log(getWeatherForecast('Las Vegas', undefined))
