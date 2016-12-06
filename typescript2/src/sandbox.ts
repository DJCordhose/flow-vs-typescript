import {saySomething} from './util';

let a: string = "" + 10;
saySomething(a);

function mach(p1: number): number {
    return p1 + 100;
}

const result:number = mach(10);

interface HasName {
    name: string;
}

class Programmer implements HasName {
    constructor(public name: string) {
    }

    print() {
        saySomething(this.name);
    }
}

let oma = new Programmer('Oma');
oma.print();