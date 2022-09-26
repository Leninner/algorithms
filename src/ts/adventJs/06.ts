export const sumPairs = (
  numbers: number[],
  result: number
): number[] | null => {
  for (let i = 0; i < numbers.length; i++) {
    const foundedPair = numbers.find(
      (number, index) => number === result - numbers[i] && index !== i
    )

    if (foundedPair) return [numbers[i], foundedPair]
  }

  return null
}
