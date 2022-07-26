const Account = require('../account')

let account = new Account();

describe('Account Class', () => {
  it('it returns constructor value', () => {
    expect(account.balance()).toBe('works')
  })
})