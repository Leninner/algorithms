import { generateFibonacci, sumOfEvenFibNumber } from '../02'

describe('evenFibonacciNumbers tests', () => {
  describe('When the generateFibonacci is called', () => {
    it('should return an array of 10 numbers', () => {
      const result = generateFibonacci(10)

      expect(result).toHaveLength(10)
    })

    it('should return an array with the first 10 numbers of the fib series', () => {
      const result = generateFibonacci(10)

      expect(result).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
    })
  })

  describe('When the sumOfEvenFibNumber is called', () => {
    it('shoul return a number', () => {
      const result = sumOfEvenFibNumber()

      expect(typeof result).toBe('number')
    })

    it('should return 4613732', () => {
      const result = sumOfEvenFibNumber()

      expect(result).toBe(4613732)
    })
  })
})
