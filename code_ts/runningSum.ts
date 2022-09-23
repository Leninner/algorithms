/**
 * @link https://leetcode.com/problems/running-sum-of-1d-array/
 * @input [1,2,3,4]
 * @output [1,3,6,10]
 */

function runningSum(nums: number[]): number[] {
  return nums.reduce((acc: number[], curr: number, index): number[] => {
    let suma = 0

    for (let i = 0; i <= index; i++) {
      suma += nums[i]
    }

    acc.push(suma)

    return acc
  }, [])
}

console.log(runningSum([1, 2, 3, 4])) // [1, 3, 6, 10]
console.log(runningSum([1, 1, 1, 1, 1])) // [1, 2, 3, 4, 5]
