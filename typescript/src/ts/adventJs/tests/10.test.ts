import { getCoins } from '../../adventJs/10'

describe('getCoins tests', () => {
  describe('The function', () => {
    it('should return an array of numbers', () => {
      expect(Array.isArray(getCoins(1))).toBe(true)
    })

    it('the length of the returned array should be 6', () => {
      expect(getCoins(1)).toHaveLength(6)
    })
  })

  describe('The funciton logic', () => {
    it('should return [0, 0, 0, 0, 0, 0] when the change is 0', () => {
      expect(getCoins(0)).toEqual([0, 0, 0, 0, 0, 0])
    })

    it('should return [1, 0, 0, 0, 0, 0] when the change is 1', () => {
      expect(getCoins(1)).toEqual([1, 0, 0, 0, 0, 0])
    })

    it("should work with the example from the problem's description", () => {
      expect(getCoins(51)).toEqual([1, 0, 0, 0, 0, 1])
      expect(getCoins(100)).toEqual([0, 0, 0, 0, 0, 2])
    })
  })
})
