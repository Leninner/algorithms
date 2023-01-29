// https://www.hackerrank.com/challenges/find-digits/problem

const findDigits = (n) => {
  // Write your code here
  const float = Array.from(n.toString())
  let cont = 0

  float.forEach((elemento) => {
    if (n % elemento === 0) {
      cont++
    }
  })

  return cont
}

findDigits(10) // 1
findDigits(111) // 3
findDigits(124) // 3
findDigits(12) // 2
findDigits(1012) // 3
