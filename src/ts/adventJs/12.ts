const OBSTACLE_ICON = 'x'
const ROAD = '_'
type sortType = 'ascendant' | 'descendant'

export const sortByOrder = (arrayToSort: number[], type: sortType) =>
  arrayToSort.sort((a, b) => (type === 'ascendant' ? a - b : b - a))

export const getMinJump = (obstacles: number[]): number => {
  const arrayWithObstacles = new Array(
    sortByOrder(obstacles, 'ascendant')[obstacles.length - 1] + 2
  )
    .fill(0)
    .map((_, index) => (obstacles.includes(index) ? OBSTACLE_ICON : ROAD))

  let jumpsToDo = 1
  let isCorrect = true

  while (isCorrect) {
    for (let i = 0; i < arrayWithObstacles.length; i += jumpsToDo) {
      if (
        i + jumpsToDo > arrayWithObstacles.length &&
        arrayWithObstacles[i] !== 'x'
      ) {
        isCorrect = false
      }

      if (arrayWithObstacles[i] === 'x') {
        jumpsToDo++
        break
      }
    }
  }

  return jumpsToDo
}
