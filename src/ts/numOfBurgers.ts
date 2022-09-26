/**
 *
 * @link https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/
 * @param tomatoSlices -
 * @param cheeseSlices -
 * @returns {number[]} - Return [total_jumbo, total_small] so that the number of remaining tomatoSlices equal to 0 and the number of remaining cheeseSlices equal to 0.
 * If it is not possible to make the remaining tomatoSlices and cheeseSlices equal to 0 return [].
 *
 * Jumbo Burger: 4 tomato slices and 1 cheese slice.
 * Small Burger: 2 Tomato slices and 1 cheese slice.
 */

const numOfBurgers = (tomatoSlices: number, cheeseSlices: number): number[] => {
  let totalJumbo = 0
  let totalSmall = 0

  totalJumbo = (tomatoSlices - 2 * cheeseSlices) / 2
  totalSmall = cheeseSlices - totalJumbo

  return totalJumbo >= 0 &&
    totalSmall >= 0 &&
    totalJumbo + totalSmall === cheeseSlices &&
    4 * totalJumbo + 2 * totalSmall === tomatoSlices
    ? [totalJumbo, totalSmall]
    : []
}

console.log(numOfBurgers(16, 7))
console.log(numOfBurgers(4, 17))
console.log(numOfBurgers(17, 4))
console.log(numOfBurgers(17, 9))
console.log(numOfBurgers(20, 8)) // [0, 0]
console.log(numOfBurgers(7, 11)) // [0, 0]
console.log(numOfBurgers(32, 17)) // [0, 0]
console.log(numOfBurgers(1, 1)) // [1, 0]
console.log(numOfBurgers(2, 1)) // [0, 1]
console.log(numOfBurgers(1, 2)) // [0, 0]
console.log(numOfBurgers(2, 2)) // [0, 0]
console.log(numOfBurgers(3, 2)) // [0, 0]
console.log(numOfBurgers(6, 2)) // [1, 1]
