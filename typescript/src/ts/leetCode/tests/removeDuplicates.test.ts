import { removeDuplicates } from '../removeDuplicates'

describe('removeDuplicates tests', () => {
  describe('When the input is [1,1,2]', () => {
    it('should return 2', () => {
      const input = [1, 1, 2]
      const [result, expectedChanges] = removeDuplicates(input)
      expect(result).toBe(2)
      expect(expectedChanges).toBe(2)
    })
  })

  describe('When the input is [0,0,1,1,1,2,2,3,3,4]', () => {
    it('should return 5', () => {
      const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
      const [result, expectedChanges] = removeDuplicates(input)
      expect(result).toBe(5)
      expect(expectedChanges).toBe(5)
    })
  })
})
