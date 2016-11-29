import {saySomething} from './util';

let foo: string = 'olli';
saySomething(foo);

class Programmer {
_name: string;
    constructor(_name: string) {
        this._name = _name;
    }

    print() {
        saySomething(`${this._name} programs`);
    }

    format() {
        
    }

}

const prog = new Programmer('Olli');
prog.print();
