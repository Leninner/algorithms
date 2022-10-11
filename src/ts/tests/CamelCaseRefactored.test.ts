import { countCamelCaseWords } from '../CamelCaseRefactored'

describe('CamelCaseRefactored tests', () => {
  describe('The function', () => {
    it('should return a number', () => {
      expect(typeof countCamelCaseWords('hello world')).toBe('number')
    })
  })

  describe('The function logic', () => {
    it('should return the number of the camel case word', () => {
      expect(countCamelCaseWords('helloWorld')).toBe(2)
      expect(countCamelCaseWords('saveChangesInTheEditor')).toBe(5)
    })

    it('should only accept strings as camel case words, otherwise return 0', () => {
      expect(countCamelCaseWords('HelloWorld')).toBe(0)
    })
  })
})
