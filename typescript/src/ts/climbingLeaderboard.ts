export const climbingLeaderboard = (
  ranked: number[],
  player: number[]
): number[] => {
  const rankedWithUniquePositions = [...new Set(ranked)]
  const result: number[] = []

  const playerLength = player.length
  const rankedLength = rankedWithUniquePositions.length

  let temporalPositionPlayer = 0
  let temporalPositionRanked = rankedLength - 1

  for (let i = temporalPositionPlayer; i < playerLength; i++) {
    if (player[i] === player[i + 1]) continue
    for (let y = temporalPositionRanked; y >= 0; y--) {
      if (player[i] < rankedWithUniquePositions[y]) {
        if (player[i] === rankedWithUniquePositions[y + 1]) {
          result.push(y + 2)
          temporalPositionRanked = y
          temporalPositionPlayer = i + 1
          break
        }

        rankedWithUniquePositions.splice(y + 1, 0, player[i])
        result.push(y + 2)
        temporalPositionRanked = y
        temporalPositionPlayer = i + 1
        break
      }

      if (player[i] >= rankedWithUniquePositions[0]) {
        rankedWithUniquePositions.splice(0, 0, player[i])
        result.push(1)
        temporalPositionRanked = y
        temporalPositionPlayer = i + 1
        break
      }
    }
  }

  return result
}
