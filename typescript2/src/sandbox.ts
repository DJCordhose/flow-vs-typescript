// npm start
// open in http://localhost:8080/webpack-dev-server/


let a: string = "10";
// a = 10;

function doIt(name: string) {
    return name + "aha";
}

let res: string = doIt("olli");

class Person {
    name: string;

    constructor(name) {
        this.name = name;
    }    
}

class Programmer extends Person {
    // constructor(name) {
    //     super("olli")
    // }

    sayName(): string {
        return this.name;
    }
}

const olli = new Programmer("Olli");
console.log(olli.name);