/* @flow */

class Dog { woof() { } }

let animals = [];

animals.push(new Dog());
animals.forEach((animal: Dog) => animal.woof())
// for (const d of animals) {
//     d.woof();
// }

class Cat { meow() { } }

// makes the above code fail
// animals.push(new Cat());
//
// animals.forEach(animal => animal.meow())