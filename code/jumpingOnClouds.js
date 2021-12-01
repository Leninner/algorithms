// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem?isFullScreen=true
// Complete the jumpingOnClouds function below
/**
 *
 * @param {array} c => Array of clouds
 * @param {number} k => length of the jump
 */

const jumpingOnClouds = (c, k) => {
  // let energy = 100; //initial energy
  // let i = k % c.length; //initial jump from 0
  // energy -= c[i] * 2 + 1; //initial energy loss
  // while (i != 0) {
  //   i = (i + k) % c.length; //jump
  //   energy -= c[i] * 2 + 1;
  // }
  let n = c.length;
  let E = 100;
  let current_cloud = 0;
  while (true) {
    current_cloud += k;
    if (current_cloud >= n) {
      current_cloud -= n;
    }
    E -= 1;
    if (c[current_cloud] == 1) {
      E -= 2;
    }
    if (current_cloud == 0) {
      console.log(E);
      break;
    }
  }

  return E;
};

export default jumpingOnClouds;
