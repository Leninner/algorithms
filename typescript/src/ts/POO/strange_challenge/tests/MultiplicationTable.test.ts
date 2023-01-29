import { MultiplicationTable } from '../src/MultiplicationTable'

describe('MultiplicationTable tests', () => {
  describe('When a new MultiplicationTable is created', () => {
    it('should accept numbers greater than 0, otherwise it should throw an error', () => {
      expect(() => new MultiplicationTable(1)).not.toThrow()
      expect(() => new MultiplicationTable(12)).not.toThrow()
      expect(() => new MultiplicationTable(-1)).toThrow()
      expect(() => new MultiplicationTable(0)).toThrow(
        'The number must be greater than 0'
      )
    })
  })

  describe('When the displayTable method is called', () => {
    it('should return a string with the multiplication table', () => {
      const multiplicationTable = new MultiplicationTable(2)
      const result =
        '2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20\n2 x 11 = 22\n2 x 12 = 24\n'

      expect(multiplicationTable.displayTable()).toBe(result)
    })
  })
})
