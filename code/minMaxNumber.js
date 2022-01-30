/**
 *
 * @param {string} numbers
 * @returns {string} max and min number
 */

const highAndLow = (numbers) => {
  const arrayOfNumbers = numbers.split(' ');

  const max = arrayOfNumbers.reduce((acc, curr) => {
    acc = Math.max(acc, curr);

    return acc;
  });

  const min = arrayOfNumbers.reduce((acc, curr) => {
    acc = Math.min(acc, curr);

    return acc;
  });

  return [max, min].join(' ');
};
