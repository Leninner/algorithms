export const getNthPrimeNumber = (n: number): number => {
  const upperPrimeLimit = getUpperBoundNthPrime(n)
  const cribaEratostenes = getCribaEratostenes(upperPrimeLimit)

  return cribaEratostenes[n - 1]
}

export const getCribaEratostenes = (n: number): number[] => {
  let primes = []
  let k = 0
  const numbersLessThatN = Array(n - 1)
    .fill(1)
    .map((number) => {
      k++
      return number + k
    })

  let factor = 2

  while (factor ** 2 < n) {
    factor = numbersLessThatN.find((n) => n !== 0)
    primes.push(factor)

    for (let i = 0; i < numbersLessThatN.length; i++) {
      if (numbersLessThatN[i] % factor === 0) numbersLessThatN[i] = 0
    }

    numbersLessThatN.filter(Boolean)
  }

  primes = [...primes, ...numbersLessThatN.filter(Boolean)]

  return primes
}

/**
 * Teorema de Chebyshev para encontrar el límite superior de un N número primo
 * @param n Número primo
 * @returns Límite superior de un N número primo
 */
export const getUpperBoundNthPrime = (n: number): number => {
  if (n < 6) return 30

  return Math.ceil(n * (Math.log(n) + Math.log(Math.log(n))))
}

export const factorial = (
  n: number,
  memo: { [key: number]: number } = {}
): number => {
  if (n === 0) {
    return 1
  }

  if (memo[n]) {
    return memo[n]
  }

  memo[n] = n * factorial(n - 1, memo)
  return memo[n]
}
