// https://blogs.msdn.microsoft.com/typescript/2016/11/08/typescript-2-1-rc-better-inference-async-functions-and-more/
class Puppy {

    walk() {
        console.log(`walk`);
    }

    bark() {
        console.log(`bark`);
    }
}

const puppies = [];

puppies.push(new Puppy());

for (let pup of puppies) {
    pup.bark();
}

class Kitty {
    walk() {
        console.log(`walk`);
    }

    miau() {
        console.log(`miau`);
    }
}

puppies.push(new Kitty());

for (let pup of puppies) {
    pup.walk();
}

