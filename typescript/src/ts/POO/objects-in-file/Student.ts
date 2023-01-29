export class Student {
  private name: string
  private age: number
  private grade: number

  constructor(name: string, age: number, grade: number) {
    this.name = name
    this.age = age
    this.grade = grade
  }

  public getInformation(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
  }
}
