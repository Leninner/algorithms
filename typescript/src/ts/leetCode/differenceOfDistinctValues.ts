export const differenceOfDistinctValues = (grid: number[][]): number[][] => {
  const result: number[][] = []

  for (let i = 0; i < grid.length; i++) {
    result.push([])

    for (let j = 0; j < grid[i].length; j++) {
      const topLeftDiagonalLength = getTopLeftDiagonal(grid, i, j).size
      const bottomRightDiagonalLength = getBottomRightDiagonal(grid, i, j).size

      result[i].push(
        Math.abs(topLeftDiagonalLength - bottomRightDiagonalLength)
      )
    }
  }

  return result
}

const getTopLeftDiagonal = (
  grid: number[][],
  i: number,
  j: number
): Set<number> => {
  const result = new Set<number>()

  while (i > 0 && j > 0) {
    result.add(grid[i - 1][j - 1])
    i--
    j--
  }

  return result
}

const getBottomRightDiagonal = (
  grid: number[][],
  i: number,
  j: number
): Set<number> => {
  const result = new Set<number>()

  while (i < grid.length - 1 && j < grid[i].length - 1) {
    result.add(grid[i + 1][j + 1])
    i++
    j++
  }

  return result
}
