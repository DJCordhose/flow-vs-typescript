// https://blogs.msdn.microsoft.com/typescript/2016/09/22/announcing-typescript-2-0/
// readonly not supported in flow
class Person {
    /*readonly*/ name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// private not supported in Flow
class Person2 {
    /*private */ _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

// ok in flow, fails at runtime
const p = new Person2("Daniel").name = "Dan";
console.log(p);

