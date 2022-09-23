/**
 * @param {string} s - An string
 * @returns {string} - The maximum substring with non-repeated letters
 */

const maxSubstring = (s: string): string => {
  const results: string[] = []
  let temporalString = ''

  for (let i = 0; i < s.length; i++) {
    if (!temporalString.includes(s[i])) {
      temporalString += s[i]
      continue
    }

    results.push(temporalString)
    s = s.slice(s.indexOf(s[i]) + 1)
    i = -1
    temporalString = ''
  }

  results.push(temporalString)

  return results.reduce(
    (acc: string, curr) => (acc = curr.length > acc.length ? curr : acc),
    ''
  )
}

console.log(maxSubstring('aaabccc'))
console.log(maxSubstring('efgabzafklmneaklj'))
console.log(maxSubstring('leninner'))
console.log(maxSubstring('DayanaCandilejo'))
