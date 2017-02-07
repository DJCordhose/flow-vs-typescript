import * as _ from 'underscore';

import * as expect from 'unexpected';

const pizzas = [
    { title: 'Margherita', vegetarian: true },
    { title: 'Pepperoni', vegetarian: false },
    { title: 'Four cheese', vegetarian: true },
    { title: 'Hawaiian', vegetarian: false },
];

const vegetarianPizzas = _.filter(pizzas, pizza => pizza.vegetarian);
console.log(vegetarianPizzas);
expect(vegetarianPizzas, 'to be an', 'array');

_.forEach(vegetarianPizzas, pizza => console.log(pizza.title));

