"use strict";
class Coder {
    constructor(name, music, age, lang = 'typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, im ${this.age}`;
    }
}
const mohammad = new Coder('mohammad', 'pop', 22);
console.log(mohammad.getAge());
// console.log(mohammad.age)
// console.log(mohammad.lang)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `i like ${this.lang}`;
    }
}
const mj = new WebDev('matebook13', 'mohammad', 'pop', 22);
// console.log(mj.age);
// console.log(mj.lang);
console.log(mj.getLang());
class Guitarist {
    constructor(name, insturment) {
        (this.name = name), (this.insturment = insturment);
    }
    play(action) {
        return `${this.name} ${action} the ${this.insturment}`;
    }
}
const ali = new Guitarist('ali', 'guitar');
console.log(ali.play('strums'));
// ////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const john = new Peeps('john');
const steve = new Peeps('steve');
const amy = new Peeps('amy');
console.log(Peeps.count);
console.log(john.id);
console.log(steve.id);
console.log(amy.id);
// getter and setter
class Band {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) &&
            value.every((item) => typeof item === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('param is not anarray of string');
    }
}
const mayBand = new Band();
mayBand.data = ['neil young', 'metalica'];
console.log(mayBand.data);
mayBand.data = [...mayBand.data, 'zz top'];
console.log(mayBand.data);
