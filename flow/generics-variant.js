/* @flow */

interface Animal {
	name: string;
}

interface Dog extends Animal {
    goodBoyFactor: number;    
}

interface Cat extends Animal {
    purrFactor: number;    
}

let cats: Array<Cat> = [];
// nope
// let animals: Array<Animal> = null;
// nope
// let animals: Array<Animal> = undefined;
// nope
// let animals: Array<Animal>;
// yup
let animals: Array<Animal> = [];

// ERROR
// not possible, animals do not have purrFactor
// animals = cats;
//
// why:
// http://flowtype.org/docs/classes.html#polymorphic-classes
// http://flowtype.org/blog/2015/03/12/Bounded-Polymorphism.html
// http://flowtype.org/docs/classes.html#polymorphism-and-type-parameter-variance
// 
// Array is invariant:
// https://github.com/facebook/flow/blob/master/lib/core.js#L144
//  declare class Array<T> { ...
//
// - invariant: types effectively need to match exatcly
// - covariant: 
// - contravariant:  
// - bivariant: covariant and contravariant at the same time 

let purry: Cat = {
    name: 'Purry',
    purrFactor: 10
};
cats.push(purry);


let twinky: Animal = {
    name: 'Twinky'
};

let brutus: Dog = {
    name: 'Brutus',
    goodBoyFactor: -10  
    
};

// can not do, they are not cats
animals.push(twinky);
animals.push(brutus);


