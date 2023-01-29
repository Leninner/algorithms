export const isValid = (letter: string) => {
  const indexOfBracketOpen = letter.indexOf('(')
  const indexOfBracketClose = letter.indexOf(')')
  if (indexOfBracketOpen === -1 || indexOfBracketClose === -1) return false

  const gif = letter.slice(indexOfBracketOpen + 1, indexOfBracketClose)
  if (!gif.length) return false
  if (gif.match('[\\[\\]\\{\\}\\(\\)]')) return false

  return true
}
