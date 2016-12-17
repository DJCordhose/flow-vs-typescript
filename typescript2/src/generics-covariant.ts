class Animal {
   name: string;
   constructor(name: string) {
       this.name = name;
   }
}

class Dog extends Animal {
    // just to make this different from cat
    goodBoyFactor: number;    
}

class Cat extends Animal {
    purrFactor: number;    
}
let cats: Array<Cat> = [];
// nope, no cat
// cats.push(10);
// nope, no cat
// cats.push(new Animal('Fido'));

// cool, is a cat
cats.push(new Cat('Purry'));

// can not do, they are not cats
// cats.push(new Dog('Brutus'));
// cats.push(new Animal('Twinky'));

// https://github.com/Microsoft/TypeScript/blob/master/lib/lib.core.es6.d.ts#L1109
// wow, that is no longer safe
let animals: Array<Animal> = [];
animals = cats;

// nope: Property 'purrFactor' is missing in type 'Animal'.
// cats = animals;

// unsafe as we write to animals
// because those are now all cool
animals.push(new Dog('Brutus'));
animals.push(new Animal('Twinky'));

cats.forEach(cat => console.log(`Cat: ${cat.name}`));
// ouch:
// Cat: Purry
// Cat: Brutus
// Cat: Twinky

// save as we access it in a readonly fashion
function logAnimals(animals: Array<Animal>) {
    animals.forEach(animal => console.log(`Animal: ${animal.name}`));
}

logAnimals(cats);