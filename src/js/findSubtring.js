/*
 * Complete the 'findSubstring' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s - azerdii
 *  2. INTEGER k - 5
 */

const findSubstring = (s, k) => {
  const vowels = /[aeiou]/gi

  if (s.match(vowels)?.length === 0) {
    return 'Not found!'
  }

  let result = ''
  let max = 0

  for (let i = 0; i < s.length - k; i++) {
    const newWord = s.substr(i, k)

    const vowelCount = newWord.match(vowels)?.length

    if (vowelCount > max) {
      max = vowelCount
      result = newWord
    } else {
      continue
    }
  }

  return result
}

console.log(findSubstring('azerdii', 5))
console.log(findSubstring('aeiouia', 3))
console.log(findSubstring('caperqiitefg', 5))
