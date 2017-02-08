export default class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHI(param: string): string {
        return this.name;
    }
}

