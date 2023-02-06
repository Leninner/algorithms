import { shuffle } from '../shuffleTheArray'

describe('Suffle the Array tests', () => {
  describe('When the param nums not have length equal to 2n', () => {
    it('should return an empty array', () => {
      expect(shuffle([1, 2, 3], 2)).toEqual([])
    })
  })

  describe('The function should accept [x1, x2, x3, ..., xN, y1, y2, y3, ..., yN]', () => {
    it('should return [x1, y1, x2, y2, ..., xN, yN]', () => {
      expect(shuffle([2, 5, 1, 3, 4, 7], 3)).toEqual([2, 3, 5, 4, 1, 7])
    })
  })
})
