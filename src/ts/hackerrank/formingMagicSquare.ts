export const formingMagicSquare = (s: number[][]): number => {
  const MAGIC_SQUARE_POSSIBILITES = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ]

  const [firstRow, secondFilter, thirdRow] = s

  const changes = MAGIC_SQUARE_POSSIBILITES.map((square) => {
    const [firstPossibleRow, secondPossibleRow, thirdPossibleRow] = square

    const abs: number[] = []

    firstRow.forEach((item, index) => {
      abs.push(Math.abs(item - firstPossibleRow[index]))
    })

    secondFilter.forEach((item, index) => {
      abs.push(Math.abs(item - secondPossibleRow[index]))
    })

    thirdRow.forEach((item, index) => {
      abs.push(Math.abs(item - thirdPossibleRow[index]))
    })

    return abs
  })

  return Math.min(
    ...changes.map((change) => change.reduce((acc, val) => acc + val, 0))
  )
}
