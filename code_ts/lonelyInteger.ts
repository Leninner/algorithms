/**
 *
 * @param {number[]} a un arreglo de números
 * @returns {number} the number that occurs only one time
 */

function lonelyinteger(a: number[]): number {
  return a.find((value) => a.indexOf(value) === a.lastIndexOf(value)) || -1;
}

console.log(lonelyinteger([1, 1, 4, 5, 4]));
