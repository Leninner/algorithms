import { differenceOfDistinctValues } from '../differenceOfDistinctValues'

describe('differenceOfDistinctValues tests', () => {
  describe('when the input is [[1,2,3],[3,1,5],[3,2,1]]', () => {
    it('should return [[1,1,0],[1,0,1],[0,1,1]]', () => {
      const input = [
        [1, 2, 3],
        [3, 1, 5],
        [3, 2, 1],
      ]

      const expected = [
        [1, 1, 0],
        [1, 0, 1],
        [0, 1, 1],
      ]
      const actual = differenceOfDistinctValues(input)

      expect(actual).toEqual(expected)
    })
  })

  describe('when the input is [[1]]', () => {
    it('should return [[0]]', () => {
      const input = [[1]]
      const expected = [[0]]
      const actual = differenceOfDistinctValues(input)

      expect(actual).toEqual(expected)
    })
  })

  describe('When the input is [[6,28,37,34,12,30,43,35,6],[21,47,38,14,31,49,11,14,49],[6,12,35,17,17,2,45,27,43],[34,41,30,28,45,24,50,20,4]]', () => {
    it('should return [[3,3,3,3,3,3,2,1,0],[2,1,1,1,1,1,1,0,1],[1,0,1,1,1,1,1,1,2],[0,1,2,3,3,3,3,3,3]]', () => {
      const input = [
        [6, 28, 37, 34, 12, 30, 43, 35, 6],
        [21, 47, 38, 14, 31, 49, 11, 14, 49],
        [6, 12, 35, 17, 17, 2, 45, 27, 43],
        [34, 41, 30, 28, 45, 24, 50, 20, 4],
      ]
      const expected = [
        [3, 3, 3, 3, 3, 3, 2, 1, 0],
        [2, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 2],
        [0, 1, 2, 3, 3, 3, 3, 3, 3],
      ]
      const actual = differenceOfDistinctValues(input)

      expect(actual).toEqual(expected)
    })
  })
})
