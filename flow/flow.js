/* @flow */
type A = {
	a: ?string;
}

type B = {
	a: string
}

const b = { a: "a" }
const a: A = b;
