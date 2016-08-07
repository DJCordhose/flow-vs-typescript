/* @flow */

// https://medium.com/@thejameskyle/flow-mapping-an-object-373d64c44592#.5fhfyngkf
// https://github.com/flowtype/flow-typed

import {square} from './my-module'

// nope
// const number = square(true);
const number = square(10);
console.log(number);

