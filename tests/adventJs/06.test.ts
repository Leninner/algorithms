import { sumPairs } from '../../code_ts/adventJs/06'

describe('sumPairs tests', () => {
  describe('The function', () => {
    it('should be defined', () => {
      expect(sumPairs).toBeDefined()
    })

    it('should be called with an array of numbers and a number as arguments', () => {
      const mockSumPairs = jest.fn(sumPairs)
      mockSumPairs([1, 2, 3, 4, 5], 6)
      expect(mockSumPairs).toHaveBeenCalledWith(
        expect.any(Array),
        expect.any(Number)
      )
    })

    it('should return an array if the function is correct', () => {
      expect(sumPairs([1, 2, 3, 4, 5], 6)).toEqual(expect.any(Array))
    })
  })

  describe('The function logic', () => {
    it('should return an array of 2 positions', () => {
      expect(sumPairs([1, 2, 3, 4, 5, 6], 5)).toHaveLength(2)
    })

    it("should return 2 numbers that add up to the result's number", () => {
      expect(sumPairs([3, 5, 7, 2], 10)).toEqual([3, 7])
      expect(sumPairs([2, 2, 3, 1], 4)).toEqual([2, 2])
      expect(sumPairs([6, 7, 1, 2], 8)).toEqual([6, 2])
      expect(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)).toEqual([1, 5])
    })

    it('should return null if any pair is founded', () => {
      expect(sumPairs([-3, -2, 7, -5], 10)).toBeNull()
    })
  })
})
