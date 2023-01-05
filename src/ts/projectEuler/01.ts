/**
 * @link 'https://projecteuler.net/problem=1'
 * @author 'Leninsin'
 * @param times
 */

export const sumOfMultiplesOf3And5 = (times: number): number => {
  let sum = 0

  for (let i = times - 1; i >= 3; i--) {
    if (isMultipleOf3(i) || isMultipleOf5(i)) {
      sum += i
    }
  }

  return sum
}

export const isMultipleOf3 = (number: number): boolean => !(number % 3)
export const isMultipleOf5 = (number: number): boolean => !(number % 5)

// the zero is negative and the 1 is positive
