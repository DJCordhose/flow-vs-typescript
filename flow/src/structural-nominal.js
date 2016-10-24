/* @flow */

// https://flowtype.org/docs/classes.html#structural-vs-nominal-typing-for-classes

interface NamedObject {
    name: string;
}

// flow does not support implements
// class Person implements NamedObject {
class Person {
    name: string;
}

class Dog {
    name: string;
}

let dog: Dog = new Dog();

// nope, nominal type compatibility violated
// let person: Person = dog;

// nope
// let person: Person = {
//     name: "Olli"
// };

// this is fine as nominal typing only applies to classes
let namedObject: NamedObject = dog;

// this is fine as nominal typing only applies to classes
let namedObject2: NamedObject = {
    name: "Olli"
};

// not fine in either
// let namedObject3: NamedObject = {
//     firstName: "Olli"
// };

// cool in flow
let namedObject4: NamedObject = {
    name: "Olli",
    firstName: "Olli"
};
