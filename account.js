class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  
  deposit(amount) {
    this.balance += amount;
    this.transactions.push({
      date: new Date().toLocaleDateString(),
      credit: amount,
      debit: null,
      balance: this.balance,
    });
  }

  withdraw(amount) {
    (this.balance -= amount),
      this.transactions.push({
        date: new Date().toLocaleDateString(),
        credit: null,
        debit: amount,
        balance: this.balance,
      });
  }

  showTranscations() {
    return this.transactions;
  }

  showBalance() {
    return this.balance;
  }
}

module.exports = Account;
