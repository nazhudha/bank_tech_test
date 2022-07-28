class PrintStatement {
  constructor(transactions) {
    // this.transactions = transactions;
    this.result = this.printStatement(transactions);
  }

  printAccountStatement(transactions) {
    this.statementHeader = "date || credit || debit || balance\n";
    let draftStatement = [this.statementHeader].concat(transactions.reverse()).join("");
    return draftStatement;
  }

  // printStatement() {
  //   if (this.transactions.length !== 0) {
  //     return (
  //       this.heading() +
  //       this.transactions
  //         .map((item) => {
  //           return `${item.showTransaction()}`;
  //         })
  //         .join("\n")
  //     );
  //   } else {
  //     return this.heading();
  //   }
  // }

  // heading() {
  //   return "date || credit || debit || balance\n";
  // }
}
module.exports = PrintStatement;
