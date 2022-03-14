/**
 *  This function return a minimum number of numbers to delete and leave the same numbers in the array
 * @param {number[]} arr - array of numbers
 * @returns {number} - minimum number of numbers to delete
 * @link https://www.hackerrank.com/challenges/equality-in-a-array/problem?isFullScreen=true
 */

const equalizeArray = (arr: number[]): number => {
  let obj: { [key: number]: number } = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }

  const result = Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .slice(1)
    .reduce((acc, [key, value]) => (acc += value), 0);

  return result;
};

console.log(equalizeArray([1, 2, 2, 3]));
console.log(equalizeArray([3, 3, 2, 1, 3]));
