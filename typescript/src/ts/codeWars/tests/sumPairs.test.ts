import { sumPairs } from '../sumPairs'

describe('sumPairs tests', () => {
  describe('When the function is called', () => {
    it('should return a number', () => {
      const result = sumPairs([11, 3, 7, 5], 10)

      expect(result).toEqual([3, 7])
    })
  })

  describe('The funcion', () => {
    it('should work with challenge tests', () => {
      const pairs = [4, 3, 2, 3, 4]
      const target = 6

      const result = sumPairs(pairs, target)
      expect(result).toEqual([4, 2])
    })

    it('should work when any pair meets the criteria', () => {
      const pairs = [0, 0, -2, 3]
      const target = 2

      const result = sumPairs(pairs, target)
      expect(result).toBeUndefined()
    })

    it('should work then multiple pairs meets the criteria and should return the pair that have the second index as the smallest in the set', () => {
      const pairs = [10, 5, 2, 3, 7, 5]
      const target = 10

      const result = sumPairs(pairs, target)
      expect(result).toEqual([3, 7])
    })

    it('should work with negative values', () => {
      const pairs = [1, -2, 3, 0, -6, 1]
      const target = -6

      const result = sumPairs(pairs, target)
      expect(result).toEqual([0, -6])
    })

    it('should work properly', () => {
      const pairs = [1, 2, 3, 4, 1, 0]
      const target = 2

      const result = sumPairs(pairs, target)
      expect(result).toEqual([1, 1])
    })
  })
})
