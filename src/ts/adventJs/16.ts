const DECODE_NUMBERS: { [key: string]: number } = {
  ['.']: 1,
  [',']: 5,
  [':']: 10,
  [';']: 50,
  ['!']: 100,
}

export const decodeNumber = (map: string): number => {
  let acc = 0
  const singleLetters = map.split('')

  for (let i = 0; i < singleLetters.length; i++) {
    const current = DECODE_NUMBERS[singleLetters[i]]
    const next = DECODE_NUMBERS[singleLetters[i + 1]]

    if (!current) return NaN

    if (current < next) {
      acc -= current
    } else {
      acc += current
    }
  }

  return acc
}
