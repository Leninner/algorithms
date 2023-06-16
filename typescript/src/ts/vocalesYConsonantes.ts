export const vowelsAndConsonants = (s: string) =>
  s.match(/[^aeiouáéíóú]/gi)?.join('')
