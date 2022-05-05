/**
 *
 * @param p - start of range
 * @param q - end of range
 * @returns array of kaprekar numbers
 * @link https://www.hackerrank.com/challenges/kaprekar-numbers/problem
 */

function kaprekarNumbers(p: number, q: number): string {
  // Write your code here
  let kaprekarNumbers: number[] = [];

  for (let i = p; i <= q; i++) {
    let square: number = i ** 2;
    let digits: number = square.toString().length;
    let left: number = Number(square.toString().slice(0, Math.floor(digits / 2)));
    let right: number = Number(square.toString().slice(Math.floor(digits / 2)));
    let sum: number = Number(left) + Number(right);

    if (sum === i) kaprekarNumbers.push(i);
  }

  return kaprekarNumbers.length > 0 ? kaprekarNumbers.join(' ') : 'INVALID RANGE';
}

console.log(kaprekarNumbers(1, 100));
