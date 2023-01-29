// https://leetcode.com/problems/reverse-integer/

// x = Integer al que tenemos que darle la vuelta

/*
 *
 * @param {number} x
 * @return {number}
 */

export const reverse = (number) => {
  if (number < 0) {
    return parseInt(`-${number.toString().split('').reverse().join('')}`)
  }

  return number > 2 ** 23
    ? 0
    : parseInt(number.toString().split('').reverse().join(''))
}
