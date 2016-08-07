/* @flow */

{
    let obj: string;
    obj = 'yo';
    // Error: number: This type is incompatible with string
    // obj = 10;
}

{
    // all cool
    let obj = false;
    obj = 'yo';
    obj = 10;

}

{
    // Cool
    let obj: any;
    obj = 'yo';
    obj = 10;
}
