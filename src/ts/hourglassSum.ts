/**
 *
 * @param {Array<number[]>} An array of arrays of integers
 * @returns {number} The maximum sum of the hourglass values
 * @link https://www.hackerrank.com/challenges/2d-array/problem
 */

const array2D = [
  [1, 2, 3, 4, 5, 6],
  [1, 5, 9, 7, 8, 9],
  [8, 5, 2, 6, 3, 5],
  [1, 1, 1, 1, 1, 1],
  [2, 5, 6, 8, 9, 4],
  [2, 5, 4, 6, 2, 3],
]

const anotherArray2D = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]

const hourglassSum = (arr: number[][]): number => {
  const results: number[] = []

  for (let i = 0; i < arr.length - 2; i++) {
    let start = 0
    let limit = 3
    let aux = 0
    let middleNumber = 1

    for (let k = 0; k < arr[i].length; k++) {
      const temp = []

      if (limit === 7) {
        break
      }

      while (start < limit) {
        temp.push(arr[i][start])
        temp.push(arr[i + 2][start])
        start++
      }

      temp.push(arr[i + 1][middleNumber])

      aux++
      middleNumber++
      start = aux
      limit++

      results.push(temp.reduce((acc, curr) => acc + curr, 0))
    }
  }

  return Math.max(...results)
}

console.log(hourglassSum(array2D))
console.log(hourglassSum(anotherArray2D))
