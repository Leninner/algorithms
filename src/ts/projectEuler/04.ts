export const isPalindromeNumber = (number: number): boolean =>
  number.toString() === number.toString().split('').reverse().join('')

export const numberPalindromeProduct = () => {
  const palindromes = []
  for (let i = 999; i >= 100; i--) {
    for (let j = i - 1; j >= 100; j--) {
      if (isPalindromeNumber(i * j)) palindromes.push(i * j)
    }
  }

  return Math.max(...palindromes)
}
