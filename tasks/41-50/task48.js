'use strict';

function getQuantitiesByCategories(products) {
    return products.reduce((quantitiesByCategories, product) => {
        const {category, quantity} = product;
        quantitiesByCategories[category] = (quantitiesByCategories[category] || 0) + quantity;

        return quantitiesByCategories;

    }, {})
}

const inputProducts = [
    {
      title: 'Phone case',
      price: 23,
      quantity: 2,
      category: 'Accessories',
    },
    {
      title: 'Android phone',
      price: 150,
      quantity: 1,
      category: 'Phones',
    },
    {
      title: 'Headphones',
      price: 78,
      quantity: 1,
      category: 'Accessories',
    },
    {
      title: 'Sport Watch',
      price: 55,
      quantity: 2,
      category: 'Watches',
    },
]
  
console.log(getQuantitiesByCategories(inputProducts))
