const Account = require("../account");

let account = new Account();
const date = new Date().toLocaleDateString();

describe("Account Class", () => {
  it("creates new empty bank Account with 0 balance", () => {
    expect(account.showBalance()).toBe(0);
  });

  it("Desposit 500, then withdraw 100, and show balance 400", () => {
    account.deposit(500);
    account.withdraw(100);
    expect(account.showBalance()).toBe(400);
  });

  it("Show list of transcations if: Desposit 500, withdraw 100 and withdraw 200", () => {
    account.withdraw(200);
    expect(account.showTranscations()).toEqual([
      {"date": date, "credit": 500, "debit": null, "balance": 500}, 
      {"date": date, "credit": null, "debit": 100, "balance": 400}, 
      {"date": date, "credit": null, "debit": 200, "balance": 200}, 
    ]);
  });

});
