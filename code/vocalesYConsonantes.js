/**
 *
 * @param {string} s
 * @returns {string} Retornar solo las consonantes del string s
 */

const vowelsAndConsonants = (s) => {
  const vowels = 'aeiouáéíóú'
  let consonants = ''

  for (let i = 0; i < s.length; i++) {
    if (!vowels.includes(s[i])) {
      consonants += s[i]
    }
  }

  return consonants
}

export { vowelsAndConsonants }
