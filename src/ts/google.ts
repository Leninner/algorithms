/**
 * @description you are given a list of rectangles represented by min and max, x and y coordinates. Compute whether or not a pair of rectangles overlap each other. If one rectangle completely covers another, it is considered overlapping.
 *
 */

interface Rectangle {
  topLeft: number[]
  dimensions: number[]
}

const getBoxesCoordinates = (rectangles: Rectangle[]): number[][] => {
  const boxesCoordinates: number[][] = []

  rectangles.forEach(({ topLeft, dimensions }: Rectangle) => {
    const boxCoordinates: number[][] = []

    boxCoordinates.push([topLeft[0], topLeft[1] - dimensions[0]]) // bottom_left
    boxCoordinates.push([topLeft[0] + dimensions[1], topLeft[1]]) // top_right

    boxesCoordinates.push(boxCoordinates.flat())
  })

  return boxesCoordinates
}

const google = (rectangles: Rectangle[]): boolean => {
  const boxesCoordinates = getBoxesCoordinates(rectangles)
  console.log(boxesCoordinates)

  for (let i = 0; i < boxesCoordinates.length; i++) {
    const [, y1, x2, y2] = boxesCoordinates[i]

    for (let j = 0; j < boxesCoordinates.length; j++) {
      const [x3, , x4, y4] = boxesCoordinates[j]

      if (x2 < x4 && x2 > x3 && y4 < y2 && y4 > y1) {
        return true
      }
    }
  }

  return false
}

console.log(
  google([
    {
      topLeft: [1, 4],
      dimensions: [3, 3],
    },
    {
      topLeft: [-1, 3],
      dimensions: [2, 1],
    },
    {
      topLeft: [0, 5],
      dimensions: [4, 3],
    },
  ])
) // True as the first and third rectangle overlap each other

console.log(
  google([
    {
      topLeft: [-1, 3],
      dimensions: [2, 1],
    },
    {
      topLeft: [0, 5],
      dimensions: [4, 3],
    },
    {
      topLeft: [2, 6],
      dimensions: [2, 2],
    },
  ])
) // False as the first and fourth rectangle do not overlap each other
