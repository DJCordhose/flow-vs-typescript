/* @flow */

type A = {
	field: ?string;
}

type B = {
    field: string
}

{
    const b = { field: "something" }
    const a: A = b;

}
{
    // incompatible
    // const b:B = { field: "something" }
    // const a:A = b;
}
