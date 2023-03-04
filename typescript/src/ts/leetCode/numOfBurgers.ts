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

export const numOfBurgers = (
  tomatoSlices: number,
  cheeseSlices: number
): number[] => {
  const totalJumbo = (tomatoSlices - 2 * cheeseSlices) / 2
  const totalSmall = cheeseSlices - totalJumbo

  if (
    Number.isInteger(totalJumbo) &&
    Number.isInteger(totalSmall) &&
    totalJumbo >= 0 &&
    totalSmall >= 0
  ) {
    return [totalJumbo, totalSmall]
  }

  return []
}
