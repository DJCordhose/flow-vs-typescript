/* @flow */

import {aha} from './javascript';

// would error, aha returns number, not string
// function typedAha(): string {
function typedAha(): number {
    return aha();
}

import {Sayer} from './basics';

const s = new Sayer('Hi');
const res: string = s.sayIt();