/**
 *
 * @param {number} d - Units to left rotation
 * @param {array} arr - Array of numbers to implement de left rotation
 * @returns {array} - An array with d unitsleft rotation
 * @link https://www.hackerrank.com/challenges/array-left-rotation/problem?isFullScreen=true
 */

const rotateLeft = (d: number, arr: number[]): number[] => {
  let aux: number
  let unitLeftRotation = d

  while (unitLeftRotation) {
    aux = arr[0]
    arr.splice(0, 1)
    arr.push(aux)
    unitLeftRotation--
  }

  return arr
}

// Input: 2, [1, 2, 3, 4, 5]
// Output: [3, 4, 5, 1, 2]

console.log(rotateLeft(2, [1, 2, 3, 4, 5])) // [3, 4, 5, 1, 2]
console.log(rotateLeft(9, [1, 2, 3, 4, 5])) // [5, 1, 2, 3, 4]
