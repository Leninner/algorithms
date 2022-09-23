// Input: [ [1, 2], [1, 3], [1, 4] ]
// Output: (6,12)(4,12)(3,12)

export const isPrime = (n: number) => {
  if (n < 2) return false
  let cont = 0

  for (let i = n; i > 0; i--) {
    if (n % i === 0) cont++
  }

  return !(cont > 2)
}
