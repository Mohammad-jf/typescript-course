"use strict";
// literal types
let myName;
let userName;
userName = 'mohammad ';
// interface mathFunction {
//   (a: number, b: number): number;
// }
const add = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
logMessage('hello');
logMessage(add(20, 30));
let subtract = function (a, b) {
    return a - b;
};
logMessage(subtract(10, 6));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const addAllDefault = (a, b, c = 2) => {
    return a + b + c;
};
logMessage(addAll(10, 20, 40));
// with default values
logMessage(addAllDefault(10, 20));
// rest parameters
const total = (...nums) => {
    return nums.reduce((prev, current) => prev + current, 0);
};
logMessage(total(1, 2, 3, 4, 5));
