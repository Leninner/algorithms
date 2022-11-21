export const lengthOfLongestSubstring = (bigWord: string): number => {
  if (!bigWord.length) return 0

  const temporalString: string[] = []
  const possibleLongestSubstrings: string[] = []
  let temporalChar = bigWord[0]

  for (let i = 0; i < bigWord.length; i++) {
    temporalChar = bigWord[i]

    if (!temporalString.includes(temporalChar)) {
      temporalString.push(bigWord[i])
    } else {
      possibleLongestSubstrings.push(temporalString.join(''))
      temporalString.splice(0, temporalString.indexOf(temporalChar) + 1)
      temporalString.push(temporalChar)
    }
  }

  possibleLongestSubstrings.push(temporalString.join(''))

  return Math.max(
    ...possibleLongestSubstrings.map((substring) => substring.length)
  )
}
