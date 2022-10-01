import { wrapGifts } from '../../adventJs/13'

describe('wrapGifts tests', () => {
  describe('The function', () => {
    it('should return an array of strings', () => {
      const result = wrapGifts(['🏈🎸', '🎮🧸'])
      expect(result).toBeInstanceOf(Array)
    })
  })

  describe('The function logic', () => {
    it('should return an * array of strings with the word "wrapped" in front of each gift', () => {
      const result = wrapGifts(['🏈🎸', '🎮🧸'])
      expect(result).toEqual(['******', '*🏈🎸*', '*🎮🧸*', '******'])
    })

    it('should work with problem case', () => {
      expect(wrapGifts(['📷'])).toEqual(['****', '*📷*', '****'])
      expect(wrapGifts(['📷', '⚽️'])).toEqual([
        '****',
        '*📷*',
        '*⚽️*',
        '****',
      ])
    })

    it("should acept emojis with only 2 characters, like '🎁'", () => {
      const paramToTest = '🎁'
      const result = wrapGifts([paramToTest])
      expect(result).toEqual(['****', '*🎁*', '****'])
      expect(paramToTest).toHaveLength(2)
    })
  })
})
