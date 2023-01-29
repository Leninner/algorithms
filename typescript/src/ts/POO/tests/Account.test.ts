import { Account } from '../Account'

describe('Account class tests', () => {
  it('should create an account with an user and balance', () => {
    const account = new Account('John Doe', 1000)
    expect(account.user).toBe('John Doe')
    expect(account.balance).toBe(1000)
    expect(account).toBeInstanceOf(Account)
  })

  it('the user param is required', () => {
    const account = new Account('Lenin')
    expect(account.user).toBe('Lenin')
  })

  it("the balance is optional and it's 0 by default", () => {
    const account = new Account('Lenin')
    expect(account.balance).toBe(0)
  })

  it('the user can deposit money', () => {
    const account = new Account('Lenin')
    account.deposit(1000)
    expect(account.balance).toBe(1000)
  })

  it('if the money param in the deposit method is negative, don´t do any', () => {
    const account = new Account('Lenin', 150)
    account.deposit(-1000)
    expect(account.balance).toBe(150)
  })

  it("the user can withdraw money if it's possible", () => {
    const account = new Account('Lenin', 150)
    account.withdraw(100)
    expect(account.balance).toBe(50)
  })

  it('in a withdraw if the money is over the balance, should put the balance in 0', () => {
    const account = new Account('Lenin', 150)
    account.withdraw(200)
    expect(account.balance).toBe(0)
  })
})
