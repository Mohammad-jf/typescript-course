"use strict";
const todaysTransactions = {
    pizza: -5,
    book: -10,
    income: 55,
};
const prop = 'pizza';
const student = {
    name: 'mohammad',
    GPA: 15,
    classess: ['signal'],
};
// console.log(student.test);
// type casting instead of index signatures
for (const key in student) {
    console.log(`${key} : ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
