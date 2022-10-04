/**
 * @description Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
 * @param {string} str - The string to check.
 * @link https://www.codewars.com/kata/55908aad6620c066bc00002a/train/typescript
 * @example XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */

const xo = (str: string): boolean =>
  // let contX = 0
  // let contY = 0

  // for (let i = 0; i < str.length; i++) {
  //   if (str[i].toLowerCase() === 'x') contX++
  //   if (str[i].toLowerCase() === 'o') contY++
  // }

  // return contX === contY

  str.toLowerCase().split('x').length === str.toLowerCase().split('o').length

xo('XOOxxoo')
xo('xooxx')
xo('ooxXm')
xo('zpzpzpp')
xo('x0')
xo('xxxooo')
xo('xXxXoOoO')
xo('z')
