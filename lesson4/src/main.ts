// type aliases
type stringOrnumber = string | number;

type stringOrnumberArray = (string | number)[];

type Guitarist = {
  name: string;
  actiive: boolean;
  albums: stringOrnumberArray;
};

type userId = stringOrnumber;

// literal types
let myName: 'mohammad';

let userName: 'mohammad' | 'ali' | 'reza';
userName = 'mohammad';



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

// never type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

// custom type gaurd
const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false;
};

// use of never Type
const numberOrString = (value: number | string): string => {
  // type gaurds
  if (typeof value === 'string') return 'string';
  if (isNumber(value)) return 'number';

  return createError('this should never happen');
  // it needs an ending return but empty return means undefined and its not equal to a string so we can
  // use an error handler with the type of never
};
