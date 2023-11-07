interface TransactionObj {
  // readonly [index: string]: number; it can be readonly
  [index: string]: number;
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
  console.log(student[key as keyof typeof student]);
});
