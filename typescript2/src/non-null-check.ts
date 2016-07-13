// typescript 2.0 will catch this
// if you turn on `strictNullChecks` in `tsconfig.json`
function foo(num: number) {
	if (num > 10) {
		return 'cool';
    //} else {
     //   return 100;
     //   return 'also cool';
    }
}

// const result: string = foo(100); // Error
// console.log(foo(100).toString()); // Error
// console.log(foo(1).toString()); // Error

const fooed: string|void= foo(100);
// const fooed: ?string = foo(100);

if (fooed) {
    fooed.toString();
}

// or tell the compiler we not better (in this case we actually do)

fooed!.toString();