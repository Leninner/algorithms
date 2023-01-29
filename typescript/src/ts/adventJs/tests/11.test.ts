import { shouldBuyFidelity } from '../../adventJs/11'

describe('shouldBuyFidelity tests', () => {
  describe('The function', () => {
    it('should be defined', () => {
      expect(shouldBuyFidelity).toBeDefined()
    })

    it('should return a boolean', () => {
      expect(typeof shouldBuyFidelity(3)).toBe('boolean')
    })
  })

  describe('The function logic', () => {
    it('return false if the times is 1', () => {
      expect(shouldBuyFidelity(1)).toBe(false)
    })

    it('returns true if the loyalty card is worth buying', () => {
      expect(shouldBuyFidelity(3)).toBe(false)
      expect(shouldBuyFidelity(21)).toBe(false)
      expect(shouldBuyFidelity(22)).toBe(false)
      expect(shouldBuyFidelity(23)).toBe(false)
      expect(shouldBuyFidelity(24)).toBe(true)
    })
  })
})
