class PrintStatement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  printStatement() {
    if(this.transactions == null){
      return 'date || credit || debit || balance';
    }
    else {
    return `date || credit || debit || balance${this.transactions}`;
  }
  }

  // private methods

  _transactionList() {
    let list = "";
    this.transactions.forEach((transaction) => {
      list = list
        .concat(`\n${this.transaction.date}`)
        .concat(this.transaction.credit)
        .concat(this.transaction.debit)
        .concat(`${transaction.balance}`);
    });
    return list;
  }
}

module.exports = PrintStatement;