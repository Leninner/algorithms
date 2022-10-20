import { decodeNumber } from '../../adventJs/16'

describe('decodeNUmber', () => {
  describe('The function', () => {
    it('should be called with a string', () => {
      const decodeNUmber = jest.fn()
      decodeNUmber('...')

      expect(decodeNUmber).toHaveBeenCalledWith(expect.any(String))
    })

    it('should return a number', () => {
      expect(typeof decodeNumber('...')).toBe('number')
    })
  })

  describe('THe function logic', () => {
    it('should return NaN if a character is strange', () => {
      expect(decodeNumber('@')).toBeNaN()
    })

    it("should return a sum of the characters with the corresponding number if the character is '.'", () => {
      expect(decodeNumber('.')).toBe(1)
      expect(decodeNumber('..')).toBe(2)
      expect(decodeNumber('...')).toBe(3)
    })

    it('if the value of a character is less than the next character value, then, both number are subtracted', () => {
      expect(decodeNumber('.,')).toBe(4)
      expect(decodeNumber('..,')).toBe(5)
      expect(decodeNumber('...,')).toBe(6)
    })

    it("should work with the challenge's example", () => {
      expect(decodeNumber(',.')).toBe(6)
      expect(decodeNumber('.........!')).toBe(107)
      expect(decodeNumber('!!!')).toBe(300)
      expect(decodeNumber(';!')).toBe(50)
      expect(decodeNumber('.;!')).toBe(49)
    })
  })
})
