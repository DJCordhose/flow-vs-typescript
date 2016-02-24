// typescript will not tell you this is messed up
function foo(num) {
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
