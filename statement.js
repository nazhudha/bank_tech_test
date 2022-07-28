class PrintStatement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  printStatement() {
    return "date || credit || debit || balance" + `\n${this.transactions}`;
  }
}

module.exports = PrintStatement;
