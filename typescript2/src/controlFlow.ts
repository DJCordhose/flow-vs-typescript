class Dog { woof() { } }

const animals = [];
animals.push(new Dog());

animals.forEach((animal: Dog) => animal.woof());

for (const d of animals) {
    d.woof();
}

class Cat { meow() { } }
// does not mess with the code above
animals.push(new Cat());
// animals.forEach(animal => animal.meow());

