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
