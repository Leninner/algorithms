export const removeTrailingZeros = (num: string): string => {
  let indexToFind = num.length - 1

  for (let i = num.length - 1; i > -1; i--) {
    if (num[i] !== '0') {
      indexToFind = i
      break
    }
  }

  return num.slice(0, indexToFind + 1)
}
