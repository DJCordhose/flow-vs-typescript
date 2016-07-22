// https://blogs.msdn.microsoft.com/typescript/2016/07/11/announcing-typescript-2-0-beta/

// tsconfig.json:
// "strictNullChecks": true

// let foo10: string = null; // Error!
let foo20: string; // Error!
let foo1: string | null = null; // Okay!
let foo2: string | void = undefined; // Okay!
let foo3: string | undefined = undefined; // Okay!
// let foo4: string?; // not supported


// foo20 = undefined; // Error
foo20 = 'huhu';
console.log(foo20);

// foo2.indexOf('no'); // Error, can be undefined
foo2!.indexOf('no'); // Okay!

function log(text: string): void {
    console.log(text.toString());
}

log(foo1!);
