/* @flow */

const func: (boolean, number) => number = (b: boolean, n: number): number => b ? n : 10;

let number: number = func(true, 20);
