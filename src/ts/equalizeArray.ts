/**
 *  This function return a minimum number of numbers to delete and leave the same numbers in the array
 * @param {number[]} arr - array of numbers
 * @returns {number} - minimum number of numbers to delete
 * @link https://www.hackerrank.com/challenges/equality-in-a-array/problem?isFullScreen=true
 */

const equalizeArray = (arr: number[]): number => {
  const obj: { [key: number]: number } = {}

  // Solution hermosa
  arr.forEach((num: number) => {
    obj[num] = (obj[num] || 0) + 1
  })

  const result = Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .slice(1)
    .reduce((acc, [, value]) => acc + value, 0)

  return result
}

equalizeArray([1, 2, 2, 3])
equalizeArray([3, 3, 2, 1, 3, 1, 1, 1, 1, 1, 1, 1])
