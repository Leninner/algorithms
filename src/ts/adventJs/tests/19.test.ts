import { learnInPlatzi } from '../../adventJs/19'

describe('learn tests', () => {
  describe('The function', () => {
    it('should return an array of numbers or null', () => {
      expect(learnInPlatzi(10, [2, 3, 8, 1, 4])).toBeInstanceOf(Array)
      expect(learnInPlatzi(4, [10, 14, 20])).toBeNull()
    })
  })

  describe('The function´s logic', () => {
    it('should return an array with the index of the two courses that we will be able to complete with the given available time and using the maximum available time.', () => {
      expect(learnInPlatzi(10, [2, 3, 8, 1, 4])).toEqual([0, 2])
      expect(learnInPlatzi(15, [2, 10, 4, 1])).toEqual([1, 2])
      expect(learnInPlatzi(8, [8, 2, 1, 4, 3])).toEqual([3, 4])
    })

    it('to always need complete two courses', () => {
      expect(learnInPlatzi(8, [8, 2, 1])).toEqual([1, 2])
      expect(learnInPlatzi(8, [8, 2, 1])).not.toEqual([0])
    })

    it('always return the first coincidence', () => {
      expect(learnInPlatzi(25, [10, 15, 20, 5])).toEqual([0, 1])
    })

    it('should return null when no time is disponible', () => {
      expect(learnInPlatzi(4, [10, 14, 20])).toBeNull()
      expect(learnInPlatzi(5, [5, 5, 5])).toBeNull()
    })
  })
})
