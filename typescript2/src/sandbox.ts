// npm start
// open in http://localhost:8080/webpack-dev-server/

let a: number | null = null;

function mach(a: number, b: number): number {
    return a + b;
}

const b: number = mach(10, 20);

class Person {
    // public string name;
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person("Oma");
console.log(person.name);
