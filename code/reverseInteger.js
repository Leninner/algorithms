// https://leetcode.com/problems/reverse-integer/

// x = Integer al que tenemos que darle la vuelta

/*
 *
 * @param {number} x
 * @return {number}
 */

const reverse = (number) => {
  if (number < 0) {
    return number > 2 ** 23 ? 0 : parseInt(`-${number.toString().split('').reverse().join('')}`);
  } else {
    return number > 2 ** 23 ? 0 : parseInt(number.toString().split('').reverse().join(''));
  }
};

export { reverse };
