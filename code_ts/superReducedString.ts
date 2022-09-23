/**
 * This function reduce the string to the minimum number of single characters
 * @param {string} s - string to reduce
 * @returns {string} - reduced string
 * @link https://www.hackerrank.com/challenges/reduced-string/problem?isFullScreen=true
 */

// Usando un stack LIFO (Last in First Out)

function superReducedString(s: string): string {
  if (s === '') return 'Empty String'
  const results: string[] = []

  for (let i = 0; i < s.length; i++) {
    if (results[results.length - 1] === s[i]) {
      results.splice(results.length - 1, 1)
      continue
    }

    results.push(s[i])
  }

  return results.join('') || 'Empty String'
}

console.log(
  superReducedString(
    'zztqooauhujtmxnsbzpykwlvpfyqijvdhuhiroodmuxiobyvwwxupqwydkpeebxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh'
  )
)
