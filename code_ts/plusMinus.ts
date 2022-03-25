/**
 * The challenge in this exercise is return the portion of non-negative, negative a nd zero numbers from an array.
 * @param arr
 * @link https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
 */

function plusMinus(arr: number[]): string {
  // Write your code here
  let result = '';
  let contNegative = 0,
    contPositive = 0,
    contZeros = 0;

  arr.forEach((value) => (value < 0 ? contNegative++ : value === 0 ? contZeros++ : contPositive++));
  result += (contPositive / arr.length).toFixed(6) + '\n';
  result += (contNegative / arr.length).toFixed(6) + '\n';
  result += (contZeros / arr.length).toFixed(6) + '\n';

  return result;
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
