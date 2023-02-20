export const largestOddNumber = (numberString: string): string => {
  for (let i = numberString.length - 1; i >= 0; i--) {
    const number = numberString[i]
    if (isOddNumber(number)) {
      return numberString.slice(0, i + 1)
    }
  }

  return ''
}

const isOddNumber = (number: string): boolean => Number(number) % 2 !== 0
