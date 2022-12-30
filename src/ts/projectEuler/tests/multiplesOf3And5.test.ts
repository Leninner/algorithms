import {
  isMultipleOf3,
  isMultipleOf5,
  sumOfMultiplesOf3And5,
} from '../multipleOf3And5'

describe('multipleOf3and5 tests', () => {
  describe('When the isMultipleOf3 is called', () => {
    it('should return true when we pass correct values', () => {
      expect(isMultipleOf3(3)).toBe(true)
    })

    it('should return false when we pass incorrect values', () => {
      expect(isMultipleOf3(7)).toBe(false)
    })
  })

  describe('When the isMultipleOf5 is called', () => {
    it('should return true when we pass correct values', () => {
      expect(isMultipleOf5(5)).toBeTruthy()
    })

    it('should return false when we pass incorrect values', () => {
      expect(isMultipleOf5(7)).toBe(false)
    })
  })

  describe('When the sumOfMultiplesOf3And5 is called', () => {
    it('should return 23 when we pass 10', () => {
      const result = sumOfMultiplesOf3And5(10)

      expect(result).toBe(23)
    })

    it('should return 233168 when we pass 1000', () => {
      const result = sumOfMultiplesOf3And5(1000)

      expect(result).toBe(233168)
    })
  })
})
