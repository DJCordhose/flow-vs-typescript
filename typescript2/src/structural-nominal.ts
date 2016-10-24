interface NamedObject {
    name: string;
}

class Person implements NamedObject {
    name: string;
}

class Dog {
    name: string;
}

let dog: Dog = new Dog();

// fine in TypeScript
let person: Person = dog;

// also fine
let person2: Person = {
    name: "Olli"
};

// fine in both
let namedObject: NamedObject = dog;

// fine in both
let namedObject2: NamedObject = {
    name: "Olli"
};

// not fine in either
// let namedObject3: NamedObject = {
//     firstName: "Olli"
// };

// cool in flow, but TypeScript wants perfect match with object literal
// ERROR: Object literal may only specify known properties, and 'firstName' does not exist in type 'NamedObject'.
let namedObject4: NamedObject = {
    name: "Olli",
    firstName: "Olli"
};
