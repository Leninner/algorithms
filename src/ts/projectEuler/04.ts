export const getPlainSumTillN = (n: number): number => (n * (n + 1)) / 2

export const getDoubleSumTillN = (n: number): number =>
  (n * (n + 1) * (2 * n + 1)) / 6

export const getDiffBetweenDoubleAndPlainSum = (n: number): number =>
  getPlainSumTillN(n) ** 2 - getDoubleSumTillN(n)
