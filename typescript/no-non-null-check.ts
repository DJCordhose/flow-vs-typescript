// typescript will not tell you this is messed up
// even if you turn on `noImplicitAny` in `tsconfig.json`
function foo(num: number) {
	if (num > 10) {
		return 'cool';
    //} else {
     //   return 100;
     //   return 'also cool';
    }
}

const result: string = foo(100);
console.log(result.toString());
console.log(foo(1).toString());
