import { largestOddNumber } from '../largestOddNumber'

describe('Largest Odd Number tests', () => {
  describe('When a string is passed', () => {
    it('should return a string', () => {
      expect(largestOddNumber('')).toBe('')
    })

    it('should return 35427 when 35427 is passed', () => {
      expect(largestOddNumber('35427')).toBe('35427')
    })

    it('should return 5 when 52 is passed', () => {
      expect(largestOddNumber('52')).toBe('5')
    })

    it('should return "" when 4206 is passed', () => {
      expect(largestOddNumber('4206')).toBe('')
    })

    it('should return 55 when 552 is passed', () => {
      expect(largestOddNumber('552')).toBe('55')
    })

    it('should return 1013389 when 10133890 is passed', () => {
      expect(largestOddNumber('10133890')).toBe('1013389')
    })
  })
})
