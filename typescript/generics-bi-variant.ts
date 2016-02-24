class Animal {
   constructor(public name: string) {}
}

class Dog extends Animal {
    // just to make this different from cat
    goodBoyFactor: number;    
}

class Cat extends Animal {
    purrFactor: number;    
}
let cats: Array<Cat> = [];
let animals: Array<Animal>;

cats = [];
cats.push(new Cat('Purry'));

// can not do, they are not cats
// cats.push(new Dog('Brutus'));
// cats.push(new Animal('Twinky'));

// https://github.com/Microsoft/TypeScript/blob/master/lib/lib.core.es6.d.ts#L1109
// wow, that is no longer safe
animals = cats;
// because those are now all cool, even though cats === animals
animals.push(new Dog('Brutus'));
animals.push(new Animal('Twinky'));

cats.forEach(cat => console.log(`Cat: ${cat.name}`));
// ouch:
// Cat: Purry
// Cat: Brutus
// Cat: Twinky