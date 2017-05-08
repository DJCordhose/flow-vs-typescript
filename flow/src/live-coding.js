// @flow

let a: number = 10;
a = true;

function gruss(name: string) {
    return "Hallo, " + name; 
}

const ergebnis: string = gruss(10);

class Sayer {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    gruss(): string {
        return "Hallo, " + this.name;
    }
}