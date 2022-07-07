/**
 * @description A function to  count the number of times each word appears in a string.
 * @link https://adventjs.dev/challenges/02
 * @param {string} letter
 * @returns {object}
 */

const carta = 'bici coche  balón _playstation bici coche peluche';

function listGifts(letter) {
  return letter
    .split(' ')
    .filter((word) => Boolean(word) && !word.includes('_'))
    .reduce((acc, curr) => {
      return acc[curr] ? acc[curr]++ : (acc[curr] = 1), acc;
    }, {});
}

console.log(listGifts(carta));
