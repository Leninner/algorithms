/**
 * @param {string} s - An string
 * @returns {string} - The maximum substring with non-repeated letters
 */

const maxSubstring = (s: string): string => {
  let max = ''
  const results: string[] = []
  let temporalString = ''

  for (let i = 0; i < s.length; i++) {
    if (!temporalString.includes(s[i])) {
      temporalString += s[i]
      continue
    }

    results.push(temporalString)
    max = max.slice(max.indexOf(s[i]) + 1)
    i = -1
    temporalString = ''
  }

  results.push(temporalString)

  return results.reduce(
    (acc: string, curr) => (acc.length > curr.length ? acc : curr),
    ''
  )
}

maxSubstring('aaabccc')
maxSubstring('efgabzafklmneaklj')
maxSubstring('leninner')
maxSubstring('DayanaCandilejo')
