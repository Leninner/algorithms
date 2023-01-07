import { hasMoreThan5Letters, spinWords } from '../spinWords'

describe('spinWords tests', () => {
  describe('When the hasMoreThan5Letters function is called', () => {
    it('should return true if the word has more than 5 letters', () => {
      expect(hasMoreThan5Letters('hello')).toBe(true)
    })

    it('should return false if the word has less than 5 letters', () => {
      expect(hasMoreThan5Letters('hi')).toBe(false)
    })
  })

  describe('When the spinWords function is called', () => {
    it('should return all the words with more than 5 letters reversed', () => {
      expect(spinWords('hello world')).toBe('olleh dlrow')
    })

    it('should work with the challenge tests', () => {
      expect(spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw')
      expect(spinWords('This is a test')).toBe('This is a test')
      expect(spinWords('This is another test')).toBe('This is rehtona test')
    })
  })
})
