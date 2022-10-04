/**
 * @link https://leetcode.com/problems/running-sum-of-1d-array/
 * @input [1,2,3,4]
 * @output [1,3,6,10]
 */

const runningSum = (nums: number[]): number[] =>
  nums.reduce((acc: number[], curr: number, index): number[] => {
    let suma = 0

    for (let i = 0; i <= index; i++) {
      suma += nums[i]
    }

    acc.push(suma)

    return acc
  }, [])

runningSum([1, 2, 3, 4]) // [1, 3, 6, 10]
runningSum([1, 1, 1, 1, 1]) // [1, 2, 3, 4, 5]
