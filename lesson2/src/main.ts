// basic types
let myName = 'mohammad'; //implicite
let userName: string = 'ali'; //explicite

const sum = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(12, 50));

let age: string | number; // union type
age = 'ten';
age = 10;


