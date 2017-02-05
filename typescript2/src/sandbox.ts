import {saySomething} from './util';

let a = "10";

saySomething(a);

function mach(param) {
    if (param > 10) {
        return param - 10;
    }
}

let res = mach(20);
if (res) {
    res.toString();
}

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const olli = new Person('Olli')
olli.name;