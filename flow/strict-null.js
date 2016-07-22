/* @flow */

class Person {
    name: string;
    constructor() {
        // this.name = undefined;
        // why no error?
    }
}

const olli: Person = new Person();

const daniel: Person = {
};


function myprint(p: Person) {
    console.log(p.name);
}

myprint(olli);

