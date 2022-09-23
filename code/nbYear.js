/**
 *
 * @param {*} p0
 * @param {*} percent
 * @param {*} aug
 * @param {*} p
 * @returns number of years to reach the population
 * @link https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
 */

const nbYear = (p0, percent, aug, p) => {
  const newPercent = percent / 100
  let initialPoblation = p0
  let year = 0

  while (initialPoblation < p) {
    initialPoblation += parseInt(initialPoblation * newPercent + aug)
    year++
  }

  year = initialPoblation > p ? year++ : year
  return year
}
