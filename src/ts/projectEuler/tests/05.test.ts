import { getMCM, getMinimunPrimeFactor, getSmallestMultiple } from '../05'

describe('05 project euler', () => {
  describe('When the getMinimunPrimeFactor method is called', () => {
    it('should return 2 when 12 is passed', () => {
      expect(getMinimunPrimeFactor(12)).toBe(2)
    })

    it('should work', () => {
      expect(getMinimunPrimeFactor(6)).toBe(2)
      expect(getMinimunPrimeFactor(3)).toBe(3)
      expect(getMinimunPrimeFactor(2)).toBe(2)
    })
  })

  describe('When the getMCM method is called', () => {
    it('should return 6 when 2 and 3 is passed', () => {
      expect(getMCM(2, 3)).toBe(6)
    })

    it('should return 60 when 12 and 5 is passed', () => {
      expect(getMCM(12, 5)).toBe(60)
    })

    it('should return 2520 when 2520 and 10 is passed', () => {
      expect(getMCM(2520, 10)).toBe(2520)
    })

    it('should work', () => {
      expect(getMCM(6, 4)).toBe(12)
    })
  })

  describe('When the getSmallestMultiple is called', () => {
    it('should return 2520 when 10 is passed', () => {
      expect(getSmallestMultiple(10)).toBe(2520)
    })

    it('should return 232792560 when 20 is passed', () => {
      expect(getSmallestMultiple(20)).toBe(232792560)
    })
  })
})
