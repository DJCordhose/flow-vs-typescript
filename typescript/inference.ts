{
    let obj: string;
    obj = 'yo';
    // Error: Type 'number' is not assignable to type 'string'.
    // obj = 10;
}

{
    // Error: no implicit any (as configured in tsconfig.json).
    let obj;
    obj = 'yo';
    obj = 10;
}

{
    // Cool
    let obj: any;
    obj = 'yo';
    obj = 10;
}
