import {
  getDiffBetweenDoubleAndPlainSum,
  getDoubleSumTillN,
  getPlainSumTillN,
} from '../06'

describe('04 project euler tests', () => {
  describe('When the getPlainSumStillN method is called', () => {
    it('should return 210 when we pass 20', () => {
      expect(getPlainSumTillN(20)).toBe(210)
    })
  })

  describe('When the getDoubleSumTillN is called', () => {
    it('should return 3025 when we pass 10', () => {
      expect(getDoubleSumTillN(10)).toBe(385)
    })
  })

  describe('When the getDiffBetweenDoubleAndPlainSum method is called', () => {
    it('should return 2640 when 10 is passed', () => {
      expect(getDiffBetweenDoubleAndPlainSum(10)).toBe(2640)
    })

    it('should return 25164150 when 100 is passed', () => {
      expect(getDiffBetweenDoubleAndPlainSum(100)).toBe(25164150)
    })
  })
})
