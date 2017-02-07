/* @flow */

// it is strange from my perspective that List is not covariant
// https://github.com/facebook/immutable-js/issues/1052

import {List} from 'immutable';

const list: List<number> = List.of(1, 2);


class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

class Cat extends Animal {
    color: string;
}



let animals: List<Animal> = List.of();
let dogs: List<Dog> = List.of();

// nope
// animals = dogs;

// dogs = animals;