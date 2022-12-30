import { isPrime, largestPrimeFactor } from '../03'

describe('largestPrimeFactor', () => {
  describe('When the isPrime', () => {
    it('should return true when a correct value is passed', () => {
      expect(isPrime(11)).toBe(true)
      expect(isPrime(3)).toBe(true)
      expect(isPrime(5)).toBe(true)
    })

    it('should return false when a correct value is passed', () => {
      expect(isPrime(4)).toBe(false)
      expect(isPrime(6)).toBe(false)
      expect(isPrime(8)).toBe(false)
    })
  })

  it('should return 29 for 13195', () => {
    expect(largestPrimeFactor(13195)).toBe(29)
    expect(largestPrimeFactor(600851475143)).toBe(6857)
  })
})
