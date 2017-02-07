/* @flow */

// https://www.jetbrains.com/help/webstorm/2016.3/using-the-flow-type-checker.html
// https://flowtype.org/
// https://facebook.github.io/immutable-js/

import {List} from 'immutable';

class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}
const someDog = new Dog();

class Cat extends Animal {
    color: string;
}
const someCat = new Cat();

let animals: List<Animal> = List.of();
let dogs: List<Dog> = List.of();

dogs = dogs.push(someDog); // we get a copy here
const newList = dogs.push(someCat); // this, does work, buuuuut
// dogs = newList; // unless you add this line, now if tells you that you can not put in a cat

const someOtherList = newList; // also cool

const listWithExplicitType: List<Cat | Dog> = newList; // also cool

// it is strange from my perspective that List is not covariant
// https://github.com/facebook/immutable-js/issues/1052

// nope
// animals = dogs;

// dogs = animals;