/**
 *
 * @param {number[]} a un arreglo de números
 * @returns {number} the number that occurs only one time
 */

const lonelyinteger = (a: number[]): number =>
  a.find((value) => a.indexOf(value) === a.lastIndexOf(value)) || -1

lonelyinteger([1, 1, 4, 5, 4])
