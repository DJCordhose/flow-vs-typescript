// npm start
// open in http://localhost:8080/webpack-dev-server/

import Person from './Person';

let a: number | null = 10;
// a = true;

a = null;

function doSomething(param: string): string {
    return "Prefix" + param;

}

doSomething('Hi');

interface HasName {
    name: string;
}

class Programmer extends Person implements HasName {
    constructor(name: string) {
        super(name);
    }
}

const oma = new Programmer('Oma');
console.log(oma.name);


