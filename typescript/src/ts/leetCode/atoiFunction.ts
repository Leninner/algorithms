const OPERATION_DIGITS = ['-', '+']
const MAX_32_BITS = 2147483647
const MIN_32_BITS = -2147483648

export const atoiFunction = (s: string): number => {
  const trimmedString = s.trim()
  const onlyDigitsNumber = getOnlyDigits(trimmedString)

  if (isInRangeOf32Bits(Number(onlyDigitsNumber))) {
    return Number(onlyDigitsNumber)
  }

  return Number(onlyDigitsNumber) < 0 ? MIN_32_BITS : MAX_32_BITS
}

const getOnlyDigits = (word: string): string => {
  const arrayLetters = word.split('')
  const startsWithLetter = !isDigit(arrayLetters[0])
  const startsWithOperation = OPERATION_DIGITS.includes(arrayLetters[0])

  if (startsWithLetter && !startsWithOperation) {
    return '0'
  }

  let actualDigits = ''
  if (startsWithOperation) {
    actualDigits += arrayLetters[0]
  }

  let i = actualDigits.length > 0 ? 1 : 0

  for (i; i < arrayLetters.length; i++) {
    if (isDigit(arrayLetters[i])) {
      actualDigits += arrayLetters[i]
    } else break
  }

  return OPERATION_DIGITS.includes(actualDigits[0]) && actualDigits.length === 1
    ? '0'
    : actualDigits
}

const isDigit = (str: string) => /^\d+$/.test(str)

const isInRangeOf32Bits = (number: number): boolean => {
  if (number < MIN_32_BITS) return false
  if (number > MAX_32_BITS) return false

  return true
}
