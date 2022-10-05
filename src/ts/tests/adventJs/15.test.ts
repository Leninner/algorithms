import { checkSledJump } from '../../adventJs/15'

describe('checkSledJump tests', () => {
  describe('The function', () => {
    it('should be called with an array of numbers', () => {
      const checkSledJumpMock = jest.fn()
      const input = [1, 2, 3, 4, 5]
      checkSledJumpMock(input)
      expect(checkSledJumpMock).toHaveBeenCalledWith(input)
    })

    it('should return a boolean', () => {
      const input = [1, 2, 3, 4, 5]
      const output = checkSledJump(input)
      expect(typeof output).toBe('boolean')
    })

    it('should throw an error if the input have a length less than 3', () => {
      const input = [1, 2]
      expect(() => checkSledJump(input)).toThrow()
    })
  })

  describe('The function logic', () => {
    it("should comprobate that the array is strictly increasing and then strictly decreasing, and return true if it's the case", () => {
      const input = [1, 2, 3, 2, 1]
      const output = checkSledJump(input)
      expect(output).toBe(true)
    })

    it('should return false if the param have some value duplicated', () => {
      const input = [1, 2, 2, 3, 4, 5]
      const output = checkSledJump(input)
      expect(output).toBe(false)
    })

    it('should return false if the array is only up or only down', () => {
      expect(checkSledJump([1, 2, 3, 4, 5])).toBe(false)
      expect(checkSledJump([5, 4, 3, 2, 1])).toBe(false)
    })

    it('should work with the challenge tests', () => {
      expect(checkSledJump([1, 2, 3, 4, 5])).toBe(false)
      expect(checkSledJump([1, 2, 3, 2, 1])).toBe(true)
      expect(checkSledJump([0, 1000, 1])).toBe(true)
      expect(checkSledJump([0, 1000, 1000, 1])).toBe(false)
      expect(checkSledJump([2, 4, 4, 6, 2])).toBe(false)
      expect(checkSledJump([1, 2, 3, 2, 1, 2, 3])).toBe(false)
    })
  })
})
