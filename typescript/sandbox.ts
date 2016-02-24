// According to http://kangax.github.io/compat-table/es6/
// for..of only work with target es6
// for random iterables and Maps/Sets
// however, the same is true for ... (spread) and generators
// Adding babel as a second compile step from es6 to es5
// lets you use those features unconditionally  

import 'babel-polyfill';

class Person {
    _name: string;
    constructor(name: string) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}


// Maps work including for..of
const map = new Map<String, Person>();
map.set('olli', new Person('Olli')); 
map.set('oma', new Person('Oma')); 
map.set('opa', new Person('Opa')); 
for (const entry of map) {
    console.log(entry);
}

const entries = [...map];
console.log(entries);



const personIterable = {
    [Symbol.iterator]() {
        const persons = [new Person('Olli'), new Person('Oma'), new Person('Opa')];
        let index = 0;
        const iterator = {
            next() {
                const value = index >= persons.length ? null : persons[index];
                index++;
                return { done: value === null, value };
            }
        };
        return iterator;
    }
};

for (const person of personIterable) {
    console.log(person.name);
}

const persons = [...personIterable];
console.log(persons);


function* gen() {
    let index = 0;
    while (index < 1000) {
        yield index;
        index++;
    }
}

const iterator = gen();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
  