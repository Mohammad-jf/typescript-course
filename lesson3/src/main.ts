let stringArray = ['hey', 'mohammad'];
let guitars = ['st', 'les paul', 5150];
let mixedData = ['evh', 1984, true];

stringArray[0] = 'john';
guitars[0] = 1985;
guitars.unshift('jim');

let test = [];

let bands: string[] = [];

bands.push('macan');

// tuple
let myTuple: [string, number, boolean] = ['dave', 123, true];

// objects
let myObject: object;
myObject = [];

const exampleObj = {
  name: 'mohammad',
  age: 22,
  isProgrammer: true,
};

type Developers = {
  name: string;
  active?: boolean;
  age: number;
  repos: (string | number)[];
};

let developers: Developers = {
  name: 'mohammad',
  active: true,
  age: 22,
  repos: ['gitHubApp,weather app'],
};

// enum

enum grade {
  u,
  d,
  c,
  b,
  a,
}

console.log(grade.u);
