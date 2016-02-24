/* @flow */

// error
function foo(num/*: number*/) {
	if (num > 10) {
		return 'cool';
	}
}

// return might be undefined
// console.log(foo(100).toString());
// console.log(foo(1).toString());
