import { FibonacciHandler } from '../src/FibonacciHandler'

describe('FibonacciHandler tests', () => {
  describe('When a new FibonacciHandler is created', () => {
    it('should accept numbers greater than 0, otherwise it should throw an error', () => {
      expect(() => new FibonacciHandler(1)).not.toThrow()
      expect(() => new FibonacciHandler(12)).not.toThrow()
      expect(() => new FibonacciHandler(-1)).toThrow()
      expect(() => new FibonacciHandler(0)).toThrow(
        'The number must be greater than 0'
      )
    })
  })

  describe('When the generate method is called', () => {
    it('should return an array with the fibonacci sequence', () => {
      const fibonacciHandler = new FibonacciHandler(5)
      const result = fibonacciHandler.generate()
      expect(result).toEqual([1, 1, 2, 3, 5])
    })

    it('should return an array with the same length as the number passed to the constructor', () => {
      const fibonacciHandler = new FibonacciHandler(5)
      const result = fibonacciHandler.generate()
      expect(result).toHaveLength(5)
    })
  })
})
