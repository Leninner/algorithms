interface IFibonacciHandler {
  generate(): number[]
}

export class FibonacciHandler implements IFibonacciHandler {
  private numbersToGenerate: number

  constructor(numbersToGenerate: number) {
    if (numbersToGenerate <= 0) {
      throw new Error('The number must be greater than 0')
    }

    this.numbersToGenerate = numbersToGenerate
  }

  generate(): number[] {
    const result = [1, 1]

    for (let i = 2; i < this.numbersToGenerate; i++) {
      result.push(result[i - 1] + result[i - 2])
    }

    return result
  }
}
