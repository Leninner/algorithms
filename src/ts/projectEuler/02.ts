export const generateFibonacci = (limit: number) => {
  const fibSerie = [0, 1]

  for (let i = 2; i < limit; i++) {
    fibSerie.push(fibSerie[i - 1] + fibSerie[i - 2])
  }

  return fibSerie
}

const isEven = (number: number) => !(number % 2)

export const sumOfEvenFibNumber = () => {
  const LIMIT = 100
  const FOUR_MILLIONS = 4000000
  let sum = 0
  const fibSerie = generateFibonacci(LIMIT)

  for (let i = 3; i < fibSerie.length; i++) {
    if (fibSerie[i] >= FOUR_MILLIONS) break
    if (isEven(fibSerie[i])) {
      sum += fibSerie[i]
    }
  }

  return sum
}
