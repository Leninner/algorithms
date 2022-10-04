/**
 *
 * @param p - start of range
 * @param q - end of range
 * @returns array of kaprekar numbers
 * @link https://www.hackerrank.com/challenges/kaprekar-numbers/problem
 */

const kaprekarNumbers = (p: number, q: number): string => {
  const kaprekarNumbers: number[] = []

  for (let i = p; i <= q; i++) {
    const square: number = i ** 2
    const digits: number = square.toString().length
    const left = Number(square.toString().slice(0, Math.floor(digits / 2)))
    const right = Number(square.toString().slice(Math.floor(digits / 2)))
    const sum: number = Number(left) + Number(right)

    if (sum === i) kaprekarNumbers.push(i)
  }

  return kaprekarNumbers.length > 0
    ? kaprekarNumbers.join(' ')
    : 'INVALID RANGE'
}

kaprekarNumbers(1, 100)
