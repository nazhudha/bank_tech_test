class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount
  }

  withdraw(amount) {
    this.balance -= amount
  }

  showTranscations() {
    return this.transactions;
  }

  showBalance() {
    return this.balance;
  }

}

module.exports = Account;