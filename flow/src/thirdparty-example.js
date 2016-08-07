/* @flow */

// https://flowtype.org/docs/third-party.html
// https://github.com/flowtype/flow-typed/tree/master/definitions/npm/underscore_v1.x.x

import _ from 'underscore';

var pizzas = [
    { title: 'Margherita', vegetarian: true },
    { title: 'Pepperoni', vegetarian: false },
    { title: 'Four cheese', vegetarian: true },
    { title: 'Hawaiian', vegetarian: false },
];

function vegetarianPizzas() {
    return _.findWhere(pizzas, {vegetarian: true});
}