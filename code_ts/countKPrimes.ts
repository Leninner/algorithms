// https://www.codewars.com/kata/5726f813c8dcebf5ed000a6b/train/javascript

export const isPrime = (n: number) => {
  let cont = 0
  const numero = parseInt((n / 2).toFixed(0))

  for (let i = numero; i >= 1; i--) {
    if (n % i === 0) cont++
  }

  return cont === 1
}
