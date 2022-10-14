export const pangram = (letter: string): boolean =>
  new Set(letter.match(/[a-zñáéíóúü]/gi)).size >= 27
