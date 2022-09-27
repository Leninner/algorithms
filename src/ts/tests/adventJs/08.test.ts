import { maxProfit } from '../../adventJs/08'

describe('maxProfit tests', () => {
  describe('The function', () => {
    it('should return a number', () => {
      expect(typeof maxProfit([1, 2, 3])).toBe('number')
    })
  })

  describe('The function logic', () => {
    it('should return the max profit if I bought and sell the stock the same day', () => {
      expect(maxProfit([1, 2, 3])).toBe(2)
      expect(maxProfit([1, 2, 3])).not.toBe(1)
    })

    it('if in that day doesn´t exist profit, should return -1', () => {
      const pricesDoge = [18, 15, 12, 11, 9, 7]
      const pricesAda = [3, 3, 3, 3, 3]
      expect(maxProfit(pricesDoge)).toBe(-1)
      expect(maxProfit(pricesAda)).toBe(-1)
    })

    it('should work with the challenge test cases', () => {
      const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
      const pricesEth = [10, 20, 30, 40, 50, 60, 70]
      expect(maxProfit(pricesBtc)).toBe(16)
      expect(maxProfit(pricesEth)).toBe(60)
    })
  })
})
