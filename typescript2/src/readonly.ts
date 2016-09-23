// https://blogs.msdn.microsoft.com/typescript/2016/09/22/announcing-typescript-2-0/
// https://msdn.microsoft.com/en-us/library/acdd6hb7.aspx
class Person {
    readonly name: string;

    constructor(name: string) {
        // cool, as in constructor
        this.name = name;
    }
}

// error
// new Person("Daniel").name = "Dan";

// error
// new Person();

// error
// new Person(null);

class Person2 {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

// error
// new Person2("Daniel").name = "Dan";

