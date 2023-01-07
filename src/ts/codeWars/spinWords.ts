export const spinWords = (words: string): string =>
  words
    .split(' ')
    .map((word) =>
      hasMoreThan5Letters(word) ? word.split('').reverse().join('') : word
    )
    .join(' ')

export const hasMoreThan5Letters = (word: string): boolean => word.length >= 5
