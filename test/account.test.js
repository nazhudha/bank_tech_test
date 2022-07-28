const Account = require("../account");

let account = new Account();

describe("Account Class", () => {
  it("creates new empty bank Account with 0 balance", () => {
    expect(account.showBalance()).toBe(0);
  });

  it("Desposit 500, then withdraw 100, and show balance 400", () => {
    account.deposit(500);
    account.withdraw(100);
    expect(account.showBalance()).toBe(400);
  });
});
