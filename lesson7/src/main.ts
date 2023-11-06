interface TransactionObj {
  [index: string]: number;
}

const todaysTransactions: TransactionObj = {
  pizza: -5,
  book: -10,
  income: 55,
};

const prop: string = 'pizza';



console.log(todaysTransactions[prop]);