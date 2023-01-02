/**
 *
 * @description Gauss' formula for sum of first n natural numbers
 * @param n number
 * @returns number
 */
export const getPlainSumTillN = (n: number): number => (n * (n + 1)) / 2

/**
 * @description Formula for sum the squares of first n natural numbers
 * @param n number
 * @returns number
 */
export const getDoubleSumTillN = (n: number): number =>
  (n * (n + 1) * (2 * n + 1)) / 6

export const getDiffBetweenDoubleAndPlainSum = (n: number): number =>
  getPlainSumTillN(n) ** 2 - getDoubleSumTillN(n)
