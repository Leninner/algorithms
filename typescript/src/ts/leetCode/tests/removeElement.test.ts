import { removeElement } from '../removeElement'

describe('removeElement tests', () => {
  describe('When the input is [3,2,2,3] and the val is 3', () => {
    it('should return 2', () => {
      const input = [3, 2, 2, 3]
      const result = removeElement(input, 3)
      expect(result).toBe(2)
    })
  })

  describe('When the input is [0,1,2,2,3,0,4,2] and the val is 2', () => {
    it('should return 5', () => {
      const input = [0, 1, 2, 2, 3, 0, 4, 2]
      const result = removeElement(input, 2)
      expect(result).toBe(5)
    })
  })
})
