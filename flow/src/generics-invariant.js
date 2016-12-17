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
// property `purrFactor` of Cat. Property not found in Animal
// cats = animals;

// ERROR
// property `purrFactor` of Cat. Property not found in Animal
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
// - invariant: types effectively need to match exatcly to be compatible
// - covariant: type must match or be more special (superset of properties)
// - contravariant: type must match or be more common (subset of properties)  
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

// can do, sub types of animals
animals.push(twinky);
animals.push(brutus);

// that works: but what is the inferred type?
function logAnimals(animals) {
// function logAnimals(animals: Array<Animal>) {
    animals.forEach(animal => console.log(`Animal: ${animal.name}`));
}

logAnimals(cats);
