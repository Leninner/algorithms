import { getMinJump, sortByOrder } from '../../adventJs/12'

describe('getMinJump tests', () => {
  describe('The function', () => {
    it('should return a number', () => {
      expect(typeof getMinJump([7, 8, 9])).toBe('number')
    })
  })

  describe('The function logic', () => {
    it('should return a number to avoid all the obstacles in the road', () => {
      expect(getMinJump([5, 3, 6, 7, 9])).toBe(4)
      expect(getMinJump([2, 4, 6, 8, 10])).toBe(7)
      expect(getMinJump([9, 5, 1])).toBe(2)
    })
  })
})

describe('sortByOrder tests', () => {
  describe('The function', () => {
    const arrayToSort = [7, 8, 1, 2, 6, 5]

    it("if the second parameter is 'ascendant' should order the first argument ascending", () => {
      expect(sortByOrder(arrayToSort, 'ascendant')).toEqual([1, 2, 5, 6, 7, 8])
    })

    it("if the second parameter is 'descendant' should order the first argument descending", () => {
      expect(sortByOrder(arrayToSort, 'descendant')).toEqual([8, 7, 6, 5, 2, 1])
    })
  })
})
