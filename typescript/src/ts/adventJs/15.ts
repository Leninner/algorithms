export const checkSledJump = (heights: number[]): boolean => {
  if (heights.length < 3) {
    throw new Error('The input must have a length of at least 3')
  }

  const MAX_HEIGHT = Math.max(...heights)
  const indexOfMaxHeight = heights.indexOf(MAX_HEIGHT)
  const FIRST_HALF = heights.slice(0, indexOfMaxHeight + 1)
  const SECOND_HALF = heights.slice(indexOfMaxHeight)

  if (FIRST_HALF.length < 2 || SECOND_HALF.length < 2) return false

  const isStricltyIncreasing = FIRST_HALF.every((height, index, array) =>
    array[index + 1] ? height < array[index + 1] : true
  )
  const isStricltlyDecreasing = SECOND_HALF.every((height, index, array) =>
    array[index + 1] ? height > array[index + 1] : true
  )

  return isStricltyIncreasing && isStricltlyDecreasing
}
