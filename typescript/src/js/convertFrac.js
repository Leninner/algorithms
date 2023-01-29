// https://www.codewars.com/kata/54d7660d2daf68c619000d95/train/javascript/

/**
 *
 * @param {array} lst
 * @output {string} string
 */

// Input: [ [1, 2], [1, 3], [1, 4] ]
// Output: (6,12)(4,12)(3,12)

const mcd = (x, y) => {
  x = Math.abs(x)
  y = Math.abs(y)
  let z

  while (y) {
    z = y
    y = x % y
    x = z
  }

  return x
}

const mcm = (a, b) => (!a || !b ? 0 : Math.abs((a * b) / mcd(a, b)))

mcm(6, 7)
