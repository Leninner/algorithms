export const isPrime = (n: number): boolean => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) return false
  }

  return true
}

// https://es.wikipedia.org/wiki/Criba_de_Erat%C3%B3stenes
const cribaEratostenes = (n: number): number[] => {
  const primos: number[] = []
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primos.push(i)
    }
  }
  return primos
}

export const largestPrimeFactor = (n: number): number => {
  const primos = cribaEratostenes(Math.ceil(Math.sqrt(n)))
  for (let i = primos.length - 1; i >= 0; i--) {
    if (n % primos[i] === 0) {
      return primos[i]
    }
  }

  return -1
}
