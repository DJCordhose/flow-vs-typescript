// https://blogs.msdn.microsoft.com/typescript/2016/07/11/announcing-typescript-2-0-beta/

// tsconfig.json:
// "strictNullChecks": true

// let foo: string = null; // Error!
let foo1: string | null = null; // Okay!
let foo2: string | void = undefined; // Okay!
let foo3: string | undefined = undefined; // Okay!

// foo2.indexOf('no'); // Error, can be undefined
foo2!.indexOf('no'); // Okay!