/* @flow */

function func2(a) {
    return a + 5;
}

// not cool: wrong return type
// let r21: string = func2(10);

// not cool: wrong return type
// let r22: boolean = func2('wat');

// either
// let r21: number = func2(10);
// or
let r22: string = func2('wat');
