// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem?isFullScreen=true
// Complete the jumpingOnClouds function below

/**
 *
 * @param {array} c => Array of clouds
 * @param {number} k => length of the jump
 */

const jumpingOnClouds = (c, k) => {
  const n = c.length
  let energy = 100
  let currentCloud = 0

  while (true) {
    currentCloud += k
    if (currentCloud >= n) {
      currentCloud -= n
    }
    energy -= 1
    if (c[currentCloud] === 1) {
      energy -= 2
    }
    if (currentCloud === 0) {
      break
    }
  }

  return energy
}

export default jumpingOnClouds
