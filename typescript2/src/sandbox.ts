// npm start
// open in http://localhost:8080/webpack-dev-server/

let a: number | null;

a = null;

function add(a: number, b: number): number {
    return a + b;
}

const res: number = add(10, 20);

class Person {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }

    sayName(): void {
        console.log(this.name);
    }
}

const olli = new Person("Olli");
olli.sayName();