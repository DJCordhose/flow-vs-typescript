/* @flow */

// https://flowtype.org/docs/quick-reference.html#any
// https://flowtype.org/docs/builtins.html#any

function func(a: any) {
    return a + 5;
}

// cool
let r1: string = func(10);

// cool
let r2: boolean = func('wat');

function func2(a) {
    return a + 5;
}

// not cool: wrong return type
// let r21: string = func2(10);

// not cool: wrong return type
// let r22: boolean = func2('wat');

