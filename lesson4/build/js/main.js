"use strict";
// literal types
let myName;
let userName;
userName = 'mohammad ';
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
