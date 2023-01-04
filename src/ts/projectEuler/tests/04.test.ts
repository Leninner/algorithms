import { isPalindromeNumber, numberPalindromeProduct } from '../04'

describe('Largest palindrome product', () => {
  describe('When the isPalindromeNumber method is called', () => {
    it('should return true when 121 is passed', () => {
      expect(isPalindromeNumber(121)).toBeTruthy()
    })

    it('should return false when 123 is passed', () => {
      expect(isPalindromeNumber(123)).toBeFalsy()
    })
  })

  describe('When the numberPalindromeProduct method is called', () => {
    it('should return a palindrome product of 2 3-digits numbers', () => {
      expect(numberPalindromeProduct()).toBe(906609)
    })
  })
})
