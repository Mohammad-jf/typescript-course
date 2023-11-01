// type aliases
type stringOrnumber = string | number;

type stringOrnumberArray = (string | number)[];

type Guitarist = {
  name: string;
  actiive: boolean;
  albums: stringOrnumberArray;
};

// literal types
let myName: 'mohammad';

let userName: 'mohammad ' | 'ali' | 'reza';
userName = 'mohammad ';

// functions

type mathFunction = (a: number, b: number) => number;

// interface mathFunction {
//   (a: number, b: number): number;
// }

const add: mathFunction = (a, b) => {
  return a + b;
};

const logMessage = (message: any): void => {
  console.log(message);
};

logMessage('hello');
logMessage(add(20, 30));

let subtract: mathFunction = function (a, b) {
  return a - b;
};

logMessage(subtract(10, 6));

// optional parameters

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }

  return a + b;
};
const addAllDefault = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

logMessage(addAll(10, 20, 40));
// with default values
logMessage(addAllDefault(10, 20));

// rest parameters
const total = (...nums: number[]): number => {
  return nums.reduce((prev, current) => prev + current, 0);
};

logMessage(total(1, 2, 3, 4, 5));
