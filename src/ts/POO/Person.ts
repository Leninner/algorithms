export class Person {
  public name: string
  public lastName: string
  public age: number

  constructor(name: string, lastName: string, age: number) {
    this.name = name
    this.lastName = lastName
    this.age = age < 0 ? 0 : age
  }

  public walk(): string {
    return `${this.name} ${this.lastName} is walking`
  }

  public talk(): string {
    return `${this.name} ${this.lastName} is talking`
  }
}
