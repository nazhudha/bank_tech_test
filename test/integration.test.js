const Account = require("../account");
const Statement = require("../statement");

let account = new Account();
let statement = new Statement();
const date = new Date().toLocaleDateString();


describe("Integration Tests", () => {
  it("0 deposits, 0 withdrawals", () => {
    expect(statement.printStatement()).toEqual(
      "date || credit || debit || balance"
    );
  });

  

});