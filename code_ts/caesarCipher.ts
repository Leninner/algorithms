/**
 *
 * @param s
 * @param k
 * @returns {string} the string rotated k times
 * @link https://www.hackerrank.com/challenges/one-week-preparation-kit-caesar-cipher-1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-three
 */

export const caesarCipher = (s: string, k: number): string => {
  const arrayMessage = s.split('').map((value) => value.charCodeAt(0))

  return arrayMessage
    .map((value) => {
      if (value >= 65 && value <= 90) {
        const newValue = value + (k % 26)
        return String.fromCharCode(
          newValue > 90 ? 64 + (newValue - 90) : newValue
        )
      }

      if (value >= 97 && value <= 122) {
        const newValue = value + (k % 26)
        return String.fromCharCode(
          newValue > 122 ? 96 + (newValue - 122) : newValue
        )
      }

      return String.fromCharCode(value)
    })
    .join('')
}
