import { lengthOfLongestSubstring } from '../lengthOfLongestSubstring'

describe('leghtOfLongestSubstring tests', () => {
  describe('The function', () => {
    it('should be defined', () => {
      expect(lengthOfLongestSubstring).toBeDefined()
    })

    it('should return a string', () => {
      expect(typeof lengthOfLongestSubstring('abcabcbb')).toBe('number')
    })

    it('should be called with a valid string', () => {
      expect(lengthOfLongestSubstring('')).toBe(0)
    })
  })

  describe('The function logic', () => {
    it('should find the length of the largest substring without repeating characters and return it', () => {
      expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
      expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
      expect(lengthOfLongestSubstring('asdfghjkliopqwertt')).toBe(17)
      expect(lengthOfLongestSubstring('abaertyuiejgkldjgkdjguriertyue')).toBe(
        11
      )
    })

    it('should work with strange cases', () => {
      expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
    })

    it('should work when the input is too low', () => {
      expect(lengthOfLongestSubstring('aaab')).toBe(2)
    })

    it('should work with the challenge tests', () => {
      expect(lengthOfLongestSubstring('aabaab!bb')).toBe(3)
    })
  })
})
