"use strict";
// typeScript casting or assertion
// convert to a more or less specific
let a = 'hello';
let b = a; //less specific type
let c = a; //more specific
let d = 'hello';
let e = 'hello';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 3, 'concat');
let nextVal = addOrConcat(2, 3, 'add');
// double casting or force casting
10;
