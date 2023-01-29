import { duplicateEncode } from '../duplicateEncode'

describe('duplicateEncode tests', () => {
  describe('The function', () => {
    it('should exist', () => {
      expect(duplicateEncode).toBeDefined()
    })

    it('should return a string', () => {
      expect(typeof duplicateEncode('')).toBe('string')
    })
  })

  describe('The function logic', () => {
    it('should return a string with ( for unique characters', () => {
      expect(duplicateEncode('abc')).toBe('(((')
    })

    it('should return ) for duplicate characters', () => {
      expect(duplicateEncode('aabc')).toBe('))((')
    })

    it('should work with challenging strings', () => {
      expect(duplicateEncode('(( @')).toBe('))((')
    })

    it('should ignore camel case', () => {
      expect(duplicateEncode('Success')).toBe(')())())')
      expect(duplicateEncode('OkFTaPOOlOOOOOI')).toBe(')((((())()))))(')
    })
  })
})
