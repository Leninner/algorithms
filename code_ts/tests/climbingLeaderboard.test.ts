import { climbingLeaderboard } from '../climbingLeaderboard'

describe('climbingLeaderboard', () => {
  describe('When the ranked scores are [100,80,80,50]', () => {
    const ranked = [100, 80, 80, 50]

    it('should return 3 if the first position in the player´s score is 60', () => {
      const player = [60]
      const result = climbingLeaderboard(ranked, player)
      expect(result).toEqual([3])
    })

    it('should return [3, 1] if the second position of the player´s score is 105', () => {
      const player = [60, 105]
      const result = climbingLeaderboard(ranked, player)
      expect(result).toEqual([3, 1])
    })

    it('should work with the example cases', () => {
      const ranked = [100, 90, 90, 80]
      const player = [70, 80, 105]
      const result = climbingLeaderboard(ranked, player)
      expect(result).toEqual([4, 3, 1])
    })
  })
})
