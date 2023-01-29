/**
 *
 * @param arr
 * @link https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
 */

const miniMaxSum = (arr: number[]): string => {
  const results: number[] = []

  for (let i = 0; i < arr.length; i++) {
    let suma = 0
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        suma += arr[j]
      }
    }
    results.push(suma)
  }

  return [Math.min(...results), Math.max(...results)].join(' ')
}

miniMaxSum([1, 3, 5, 7, 9])
miniMaxSum([5, 5, 5, 5, 5])
