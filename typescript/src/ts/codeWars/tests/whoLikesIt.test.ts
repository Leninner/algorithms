import { whoLikesIt } from '../whoLikesIt'

describe('whoLikesIt tests', () => {
  describe('When nobody likes', () => {
    it('should return "no one likes this"', () => {
      expect(whoLikesIt([])).toBe('no one likes this')
    })
  })

  describe('When one person likes', () => {
    it('should return "Peter likes this"', () => {
      expect(whoLikesIt(['Peter'])).toBe('Peter likes this')
    })
  })

  describe('When two people like', () => {
    it('should return "Jacob and Alex like this"', () => {
      expect(whoLikesIt(['Jacob', 'Alex'])).toBe('Jacob and Alex like this')
    })
  })

  describe('When three people like', () => {
    it('should return "Max, John and Mark like this"', () => {
      expect(whoLikesIt(['Max', 'John', 'Mark'])).toBe(
        'Max, John and Mark like this'
      )
    })
  })

  describe('When four or more people like', () => {
    it('should return "Alex, Jacob and 2 others like this"', () => {
      expect(whoLikesIt(['Alex', 'Jacob', 'Mark', 'Max'])).toBe(
        'Alex, Jacob and 2 others like this'
      )
    })
  })
})
