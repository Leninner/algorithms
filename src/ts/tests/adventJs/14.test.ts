import { missingReindeer } from '../../adventJs/14'

describe('missingReindeer tests', () => {
  describe('The function', () => {
    it('should return a number', () => {
      expect(typeof missingReindeer([0])).toBe('number')
    })
  })

  const idMissing = 4

  describe('The function logic', () => {
    it('should return the reindeer id that is missing', () => {
      expect(missingReindeer([5, 2, 1, 0, 3])).toBe(idMissing)
      expect(missingReindeer([5, 2, 1, 0, 3, 77, 55])).toBe(idMissing)
    })

    it('should work when the missing is the last', () => {
      expect(missingReindeer([2, 1, 0, 3])).toBe(idMissing)
    })

    it('should work with the challenge tests', () => {
      expect(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])).toBe(8)
      expect(missingReindeer([0])).toBe(1)
      expect(missingReindeer([3, 0, 1])).toBe(2)
    })
  })
})
