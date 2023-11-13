let stringArray = ['hey', 'mohammad'];
let guitars = ['st', 'les paul', 5150];
let mixedData = ['evh', 1984, true];

stringArray[0] = 'john';
guitars[0] = 1985;
guitars.unshift('jim');

let test = [];

let bands: string[] = [];
bands.push('macan band');

let tuple: [string, number, boolean] = ['mohammad', 23, true]; //tuple

let mixed = ['ali', 21, false]; //union type array

// objects
let myObj: object;

myObj = [];
console.log(typeof myObj);

myObj = bands;

myObj = {};

const exampleObj = {
  prop1: 'mohammad',
  prop2: true,
};

type Gutarist = {
  name: string;
  active?: boolean; // optional
  albums: (string | number)[];
};

const guitarist1: Gutarist = {
  name: 'mohammad',
  active: true,
  albums: ['goleGandom'],
};

const greetGuitarist = (guitarist: Gutarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name}!`;
  }

  return 'Hello!';
};

// Enums
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
