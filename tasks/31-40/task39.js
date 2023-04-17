'use strict';

const myCities = ['London', 'New York', 'Singapore'];

const printCityInfo = (arr) => {
    arr.forEach((el, el_n) => {
        console.log(`${el} is at the index ${el_n} in the myCities array.`);
    })
}

printCityInfo(myCities);
