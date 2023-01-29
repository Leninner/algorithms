export const duplicateEncode = (word: string): string =>
  word
    .toLowerCase()
    .split('')
    .reduce((acc: string, curr: string) => {
      if (getTimesTheCharAppears(word, curr) > 1) {
        acc += ')'
      } else {
        acc += '('
      }

      return acc
    }, '')

const getTimesTheCharAppears = (word: string, char: string): number =>
  word
    .toLowerCase()
    .split('')
    .filter((c: string) => c === char).length
