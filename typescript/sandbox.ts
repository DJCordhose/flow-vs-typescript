// According to http://kangax.github.io/compat-table/es6/
// for..of only work with target es6
// for random iterables and Maps/Sets
// however, the same is true for ... (spread) and generators
// Adding babel as a second compile step from es6 to es5
// lets you use those features unconditionally  

// to allow for ES6 features
import 'babel-polyfill';

// import './basics.ts';
// import './no-non-null-check.ts';
import './generics-covariant.ts';

// weird, build crashes when there is nothing in this module
console.log('Done');