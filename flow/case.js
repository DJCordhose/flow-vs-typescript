/* @flow */

type A = 'a1' | 'a2' ;

let a: A;
// ok
a = 'a1';
// ok
a = 'a2';
// error as expected
// a = 'a3';

// no error, why?
switch (a) {
    case 'a1': console.log('a1'); break;
    case 'a2': console.log('a2'); break;
    case 'a3': console.log('why is this legal code???'); break;
    default: console.log('and why this?');
}
