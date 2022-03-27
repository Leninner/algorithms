/**
 *
 * @param s
 * @param k
 * @returns {string} the string rotated k times
 * @link https://www.hackerrank.com/challenges/one-week-preparation-kit-caesar-cipher-1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-three
 */

function caesarCipher(s: string, k: number): string {
  const arrayMessage = s.split('').map((value) => value.charCodeAt(0));

  for (let i = 0; i < arrayMessage.length; i++) {
    if (arrayMessage[i] >= 65 && arrayMessage[i] <= 90) {
      let newValue = arrayMessage[i] + (k % 26);
      newValue = newValue > 90 ? 64 + (newValue - 90) : newValue;
      arrayMessage[i] = newValue;
    }

    if (arrayMessage[i] >= 97 && arrayMessage[i] <= 122) {
      let newValue = arrayMessage[i] + (k % 26);
      newValue = newValue > 122 ? 96 + (newValue - 122) : newValue;
      arrayMessage[i] = newValue;
    }
  }

  return arrayMessage.map((value) => String.fromCharCode(value)).join('');
}

console.log(caesarCipher('middle-Outz', 2));
