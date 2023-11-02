// typeScript casting or assertion
type Str = string;
type numOrStr = string | number;
type Litteral = 'hello';

// convert to a more or less specific
let a: Str = 'hello';
let b = a as numOrStr; //less specific type

let c = a as Litteral; //more specific

let d = <Str>'hello';
let e = <string | number>'hello';

const addOrConcat = (
  a: number,
  b: number,
  c: 'add' | 'concat'
): number | string => {
  if (c === 'add') return a + b;
  return '' + a + b;
};

let myVal: string = addOrConcat(2, 3, 'concat') as string;
let nextVal: number = addOrConcat(2, 3, 'add') as number;

// double casting or force casting
10 as unknown as string;

// the dom

const img = document.querySelector('img') as HTMLImageElement;
const myImg = document.getElementById('#img') as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById('#img');

const year = document.getElementById('year') as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
