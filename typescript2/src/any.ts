function func(a: any) {
    return a + 5;
}

// cool
let r1: string = func(10);

// cool
let r2: boolean = func('wat');

// no implicit any if you disallow
function func2(a) {
    return a + 5;
}

// cool
let r21: string = func2(10);

// cool
let r22: boolean = func2('wat');

