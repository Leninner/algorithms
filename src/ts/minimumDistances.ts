/**
 * This function returns the minimum distance between the indices of two elements of the same array
 * @param {number[]} a - An array of integers
 * @returns {number} minimum distance between two numbers
 * @link https://www.hackerrank.com/challenges/minimum-distances/problem?isFullScreen=true
 */

const minimumDistances = (a: number[]): number => {
  if (Array.from(new Set(a)).length === a.length) return -1

  const distances: any = {}

  for (let i = 0; i < a.length; i++) {
    if (a[i] in distances) {
      distances[a[i]] = [i - distances[a[i]][0], 'modified']
    } else {
      distances[a[i]] = [i]
    }
  }

  return Math.min(
    ...Object.entries(distances)
      .filter(([, value]: any[]) => value[1])
      .map(([, value]: any[]) => value[0])
  )
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7])) // 3 => 4 - 1 = 3
console.log(minimumDistances([3, 2, 1, 2, 3])) // 2
console.log(minimumDistances([1, 2, 3, 4, 5, 6])) // -1
