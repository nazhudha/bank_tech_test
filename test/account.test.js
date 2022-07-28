const Account = require('../account')

let account = new Account();

describe('Account Class', () => {
  it('creates new empty bank Account with 0 balance', () => {
    expect(account.showBalance()).toBe(0)
  })
})