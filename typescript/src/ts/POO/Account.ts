export class Account {
  public user: string
  public balance: number

  constructor(user: string, balance?: number) {
    this.user = user
    this.balance = balance || 0
  }

  public deposit(amount: number): void {
    if (amount < 0) return
    this.balance += amount
  }

  public withdraw(amount: number): void {
    if (this.balance - amount < 0) {
      this.balance = 0
      return
    }

    this.balance -= amount
  }
}
