export const getSmallestMultiple = (number: number) => {
  let result = getMCM(1, 2)

  for (let i = 3; i <= number; i++) {
    result = getMCM(i, result)
  }

  return result
}

export const getMCM = (a: number, b: number) => {
  const numberAFactors = []
  const numberBFactors = []

  let auxA = a
  let auxB = b

  while (auxA > 1) {
    const minimunPrimeFactor = getMinimunPrimeFactor(auxA)
    numberAFactors.push(minimunPrimeFactor)
    const rest = auxA / minimunPrimeFactor
    auxA = rest
  }

  while (auxB > 1) {
    const minimunPrimeFactor = getMinimunPrimeFactor(auxB)
    numberBFactors.push(minimunPrimeFactor)
    const rest = auxB / minimunPrimeFactor
    auxB = rest
  }

  const aFactorPrimesResume: { [key: number]: number } = {}
  const bFactorPrimesResume: { [key: number]: number } = {}

  for (let i = 0; i < numberAFactors.length; i++) {
    if (aFactorPrimesResume[numberAFactors[i]]) {
      aFactorPrimesResume[numberAFactors[i]]++
    } else {
      aFactorPrimesResume[numberAFactors[i]] = 1
    }
  }

  for (let i = 0; i < numberBFactors.length; i++) {
    if (bFactorPrimesResume[numberBFactors[i]]) {
      bFactorPrimesResume[numberBFactors[i]]++
    } else {
      bFactorPrimesResume[numberBFactors[i]] = 1
    }
  }

  const end = Object.entries({
    ...aFactorPrimesResume,
    ...bFactorPrimesResume,
  }).map(([key, value]: any[]) => {
    if (aFactorPrimesResume[key] && bFactorPrimesResume[key]) {
      return Math.pow(
        key,
        Math.max(aFactorPrimesResume[key], bFactorPrimesResume[key])
      )
    }

    return Math.pow(key, value)
  })

  return end.reduce((acc, curr) => acc * curr)
}

export const getMinimunPrimeFactor = (number: number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return i
  }

  return number
}
