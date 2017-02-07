/* @flow */

// https://www.jetbrains.com/help/webstorm/2016.3/using-the-flow-type-checker.html
// https://flowtype.org/
// https://facebook.github.io/immutable-js/

import {List} from 'immutable';

// variables
// non-nullable
// functions
// classes
// generics
// immutable

let v: number|null= 10;
v = null;

function doIt(num) {
    if (num > 10) {
        return "I did";
    }
}

const result = doIt(19);
if (result) {
    console.log(result.toString());
}

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    breed: string;
}

class Cat extends Animal  {
    color: string;
}

let dogs: List<Dog> = List.of(new Dog("Peppi"));
dogs = dogs.push(new Dog("Fido"));
dogs.forEach(dog => console.log(dog.name));

let catsAndDogs: List<Cat|Dog> = dogs.push(new Cat('Kitty'));

function enumerate(animals: List<Animal>) {
    animals.forEach(animal => console.log(animal.name));
}

// enumerate(dogs);