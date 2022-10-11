export const countCamelCaseWords = (word: string): number => {
  // tu código aquí
  if (
    word.includes(' ') ||
    word === '' ||
    isWithinUpperCaseLetters(word.charAt(0))
  ) {
    return 0
  }
  return word.split('').filter(isWithinUpperCaseLetters).length + 1
}

const isWithinUpperCaseLetters = (char: string): boolean =>
  char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90
