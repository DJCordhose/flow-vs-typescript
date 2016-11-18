class Sayer {
    // mandatory
    what: string;

    constructor(what: string) {
        this.what = what;
    }

    // return type if you want to
    sayIt(): string {
        return `Saying: ${this.what}`;
    }
}

const sayer = new Sayer('Huhu');
const it = sayer.sayIt();
console.log(it);