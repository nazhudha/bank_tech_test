const Account = require("../account");
const Statement = require("../statement");

let account = new Account();
let statement = new Statement(account.showTranscations());
const date = new Date().toLocaleDateString();

describe("Integration Tests", () => {
  it("0 deposits, 0 withdrawals", () => {
    expect(statement.printStatement()).toEqual(
      "date || credit || debit || balance"
    );
  });

  it("Desposit 500, then withdraw 100, and show balance 400", () => {
    account.deposit(500);
    account.withdraw(100);
    expect(statement.printStatement()).toBe(
      `date || credit || debit || balance\n ${date} || 500 || || 500\n ${date} || || 100 || 400`
    );
  });
});
