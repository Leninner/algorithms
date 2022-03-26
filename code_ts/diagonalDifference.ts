/**
 * @link https://www.hackerrank.com/challenges/one-week-preparation-kit-diagonal-difference/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two&h_r=next-challenge&h_v=zen
 */

function diagonalDifference(arr: number[][]): number {
  let leftToRightDiagonal = 0,
    rightToLeftDiagonal = 0;
  let k = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) {
        leftToRightDiagonal += arr[i][j];
      }
    }

    rightToLeftDiagonal += arr[i][k];
    k--;
  }

  return Math.abs(leftToRightDiagonal - rightToLeftDiagonal);
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
