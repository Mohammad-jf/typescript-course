class Coder {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = 'typescript'
  ) {}

  public getAge() {
    return `Hello, im ${this.age}`;
  }
}

const mohammad = new Coder('mohammad', 'pop', 22);
console.log(mohammad.getAge());
// console.log(mohammad.age)
// console.log(mohammad.lang)


class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `i like ${this.lang}`;
  }
}


const mj = new WebDev('matebook13', 'mohammad', 'pop', 22);
// console.log(mj.age);
// console.log(mj.lang);
console.log(mj.getLang());


// implementing an interface to  a class
interface Musician {
  name: string;
  insturment: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  insturment: string;
  constructor(name: string, insturment: string) {
    (this.name = name), (this.insturment = insturment);
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.insturment}`;
  }
}

const ali = new Guitarist('ali', 'guitar');
console.log(ali.play('strums'));

// ////////////////////////////////////////

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const john = new Peeps('john');
const steve = new Peeps('steve');
const amy = new Peeps('amy');

console.log(Peeps.count);
console.log(john.id);
console.log(steve.id);
console.log(amy.id);

// getter and setter
class Band {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (
      Array.isArray(value) &&
      value.every((item) => typeof item === 'string')
    ) {
      this.dataState = value;
      return;
    } else throw new Error('param is not anarray of string');
  }
}

const myBand = new Band();

myBand.data = ['neil young', 'metalica'];

console.log(myBand.data);

myBand.data = [...myBand.data, 'zz top'];

console.log(myBand.data)
