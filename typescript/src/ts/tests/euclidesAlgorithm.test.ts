import { euclidesAlgorithm } from '../euclidesAlgorithm'

describe('Euclides Algorithm', () => {
  describe('When euclidesAlgorithm method is called', () => {
    it('should return 24 when 72 and 48 are passed', () => {
      expect(euclidesAlgorithm(72, 48)).toBe(48)
    })
  })
})
