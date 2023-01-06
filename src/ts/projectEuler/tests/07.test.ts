import {
  factorial,
  getCribaEratostenes,
  getNthPrimeNumber,
  getUpperBoundNthPrime,
} from '../07'

describe('10001st prime tests', () => {
  describe('When the factorial method is called', () => {
    it('should return 120 when the number is 5', () => {
      expect(factorial(5)).toBe(120)
    })

    it('should return 45426 when the number is 10', () => {
      expect(factorial(10)).toBe(3628800)
    })
  })

  describe('when the getUpperBoundNthPrime is called', () => {
    it('should return true if the number is prime', () => {
      expect(getUpperBoundNthPrime(100)).toBe(614)
      expect(getUpperBoundNthPrime(5)).toBe(30)
    })
  })

  describe('When getCribaEratostenes method is called', () => {
    it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] when the number is 30', () => {
      expect(getCribaEratostenes(30)).toEqual([
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
      ])
    })
  })

  describe('When the getNthPrimeNumber method is called', () => {
    it('should return 13 when the number is 6', () => {
      expect(getNthPrimeNumber(6)).toBe(13)
    })

    it('should return the 10001nth prime number', () => {
      expect(getNthPrimeNumber(10001)).toBe(104743)
    })
  })
})
