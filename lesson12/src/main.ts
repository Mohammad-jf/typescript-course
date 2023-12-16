let myArray: string[]; //array type

// any type
function returnValue(value: any) {
  return value;
}

// object type
// we can define atype for this

type Person = {
  name: string;
  age: number;
  skill?: string;
};

let person: Person = {
  name: 'mohammad',
  age: 22,
  skill: 'programmer',
};

let person2: Person = {
  name: 'ali',
  age: 20,
  //   third prameter is optional
};

// types can be used for functions and basic primitive types as well as objects but interfaces are used for
// classses and objects more often

type Mathfunc = (a: number, b: number) => number;
type Id = string;

type LogValue = (value: any) => void; //when function returns nothing

// uonion type
type Todo = {
  name: string;
  status: 'Complete' | 'Incomplete' | 'Draft';
};

// you cant use union for interfaces
type TodoPerson = Todo | { name: string; age: number }; //you cant do this with interfaces

// intersections
type TodoGeneral = Todo & { id: string }; //combine two type

interface Programmer {
  language: string;
  status: 'employe' | 'freelancer' | 'lerning phase';
}

// you can use extends keyword for combining interfaces
interface ProgrammerWithId extends Programmer {
  id: string;
}

// intersection is not usefull for primitive values because you cant have a number type as well as object at the same time

// readonly

let person3: Person = {
  name: 'mohammad',
  age: 22,
  skill: 'programmer',
};

function getValue(key: keyof Person, person: Person) {
  return person[key];
}

const age = getValue('age', person);

type Musician = {
  //   index signature
  [index: string]: string;
  instrument: string;
};

// tuples
let myTupel: [string, number, boolean] = ['mohammad', 22, true];
