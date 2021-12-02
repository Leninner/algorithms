// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem?isFullScreen=true
// Complete the jumpingOnClouds function below

/**
 *
 * @param {array} c => Array of clouds
 * @param {number} k => length of the jump
 */

const jumpingOnClouds = (c, k) => {
  let n = c.length;
  let energy = 100;
  let current_cloud = 0;

  while (true) {
    current_cloud += k;
    if (current_cloud >= n) {
      current_cloud -= n;
    }
    energy -= 1;
    if (c[current_cloud] == 1) {
      energy -= 2;
    }
    if (current_cloud == 0) {
      console.log(energy);
      break;
    }
  }

  return energy;
};

export default jumpingOnClouds;
