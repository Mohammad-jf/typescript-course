interface TransactionObj {
  // readonly [index: string]: number; it can be readonly
  [index: string]: number;
  pizza: number;
  book: number;
  income: number;
}

const todaysTransactions: TransactionObj = {
  pizza: -5,
  book: -10,
  income: 55,
};

const prop: string = 'pizza';

// console.log(todaysTransactions[prop]);

interface Student {
  // [index: string]: string | number | string[] | undefined;
  name: string;
  GPA: number;
  classess?: string[];
}

const student: Student = {
  name: 'mohammad',
  GPA: 15,
  classess: ['signal'],
};

// console.log(student.test);

// type casting instead of index signatures
for (const key in student) {
  console.log(`${key} : ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]); //refers to object itself;
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(student[key]);
};

logStudentKey(student, 'classess');

type Streams = 'salary' | 'bonus' | 'sideHustle';

type Income = Record<Streams, number>;

const monthlyincomes: Income = {
  salary: 500,
  bonus: 100,
  sideHustle: 250,
};

// for record utility type you should provide an assertion
for (const revenue in monthlyincomes) {
  console.log(monthlyincomes[revenue as keyof Income]);
}
