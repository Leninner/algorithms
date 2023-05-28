import { atoiFunction } from '../atoiFunction'

describe('atoiFunction tests', () => {
  describe('When the input is "42"', () => {
    it('should return 42', () => {
      const input = '42'
      const result = atoiFunction(input)

      expect(result).toBe(42)
    })
  })

  describe('When the input is "   -42"', () => {
    it('should ignore leading whitespace and return -42', () => {
      const input = '   -42'
      const result = atoiFunction(input)

      expect(result).toBe(-42)
    })
  })

  describe('When the input is "4193"', () => {
    it('should return 4193 as its don`t have any identifier', () => {
      const input = '4193'
      const result = atoiFunction(input)

      expect(result).toBe(4193)
    })
  })

  describe('When the input is "0032"', () => {
    it('should return 32 as its don`t have any identifier', () => {
      const input = '0032'
      const result = atoiFunction(input)

      expect(result).toBe(32)
    })
  })

  describe('When the input is "4193 with words"', () => {
    it('should return 4193 as its don`t have any identifier', () => {
      const input = '4193 with words'
      const result = atoiFunction(input)

      expect(result).toBe(4193)
    })
  })

  describe('When the input is up to 32 bits', () => {
    it('should return "-2147483649"', () => {
      const input = '-2147483649'
      const result = atoiFunction(input)

      expect(result).toBe(-2147483648)
    })
  })

  describe('When the input is "word and 987"', () => {
    it('should return 0', () => {
      const input = 'word and 987'
      const result = atoiFunction(input)

      expect(result).toBe(0)
    })
  })

  describe('When the input is "3.1245421"', () => {
    it('should return 3', () => {
      const input = '3.1245421'
      const result = atoiFunction(input)

      expect(result).toBe(3)
    })
  })

  describe('When the input is "-+78"', () => {
    it('should return 0', () => {
      const input = '-+78'
      const result = atoiFunction(input)

      expect(result).toBe(0)
    })
  })
})
