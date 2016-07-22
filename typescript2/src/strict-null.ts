// https://blogs.msdn.microsoft.com/typescript/2016/07/11/announcing-typescript-2-0-beta/

// tsconfig.json:
// "strictNullChecks": true

class Person {
    name: string;
    constructor() {
        // this.name = undefined;
        // why no error?
    }
}

const olli: Person = new Person();

// const daniel: Person = {
// };


function myprint(p: Person) {
    console.log(p.name);
}

myprint(olli);

