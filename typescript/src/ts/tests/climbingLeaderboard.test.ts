import { climbingLeaderboard } from '../climbingLeaderboard'

describe('climbingLeaderboard', () => {
  describe('When function is called', () => {
    const ranked = [100, 90, 90, 80]
    const player = [70, 80, 105]

    it('should return an array with the same length of the player`s array', () => {
      expect(climbingLeaderboard(ranked, player)).toHaveLength(3)
    })

    it('after each game, the result array should be filled', () => {
      const ranked = [100, 90, 90, 80]
      const player = [70, 80, 105]

      expect(climbingLeaderboard(ranked, player)).toEqual([4, 3, 1])
    })

    it('should work with the challenge example', () => {
      const ranked = [100, 100, 50, 40, 40, 20, 10]
      const player = [5, 25, 50, 120]

      const rankedTwo = [100, 90, 90, 80, 75, 60]
      const playerTwo = [50, 65, 77, 90, 102]

      expect(climbingLeaderboard(ranked, player)).toEqual([6, 4, 2, 1])

      expect(climbingLeaderboard(rankedTwo, playerTwo)).toEqual([6, 5, 4, 2, 1])
    })
  })
})
