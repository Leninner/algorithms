export class MultiplicationTable {
  private numberToGenerate: number
  private DEFAULT_SIZE = 12

  constructor(numberToGenerate: number) {
    if (numberToGenerate <= 0) {
      throw new Error('The number must be greater than 0')
    }

    this.numberToGenerate = numberToGenerate
  }

  displayTable(): string {
    let result = ''

    for (let i = 1; i <= this.DEFAULT_SIZE; i++) {
      result += `${this.numberToGenerate} x ${i} = ${
        this.numberToGenerate * i
      }\n`
    }

    return result
  }
}
