import { formingMagicSquare } from './formingMagicSquare'

describe('formingMagicSquare tests', () => {
  describe('The function', () => {
    it('should be defined', () => {
      expect(formingMagicSquare).toBeDefined()
    })

    it('should return a number', () => {
      expect(
        typeof formingMagicSquare([
          [4, 9, 2],
          [3, 5, 7],
          [8, 1, 5],
        ])
      ).toBe('number')
    })
  })

  describe('The function logic', () => {
    it('should return 7 when the input is [[5, 3, 4], [1, 5, 8], [6, 4, 2]]', () => {
      const input = [
        [5, 3, 4],
        [1, 5, 8],
        [6, 4, 2],
      ]

      const expected = 7

      expect(formingMagicSquare(input)).toBe(expected)
    })

    it('should return 1 when the input is [[4 9 2], [3 5 7], [8 1 5]]', () => {
      const input = [
        [4, 9, 2],
        [3, 5, 7],
        [8, 1, 5],
      ]

      const expected = 1

      expect(formingMagicSquare(input)).toBe(expected)
    })

    it('should return 4 when the input is [[4 8 2], [4 5 7], [6 1 6]]', () => {
      const input = [
        [4, 8, 2],
        [4, 5, 7],
        [6, 1, 6],
      ]

      const expected = 4

      expect(formingMagicSquare(input)).toBe(expected)
    })

    it('should return 18 when the input is [[7 6 5], [7 2 8], [5 3 4]]', () => {
      const input = [
        [7, 6, 5],
        [7, 2, 8],
        [5, 3, 4],
      ]

      const expected = 18

      expect(formingMagicSquare(input)).toBe(expected)
    })
  })
})
