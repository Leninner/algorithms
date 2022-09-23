const isPangram = (string) => {
  const arrayOfCodes = string
    .split('')
    .sort()
    .map((value) => value.toUpperCase().charCodeAt(0))

  return (
    Array.from(new Set(arrayOfCodes)).reduce((acc, curr) => {
      let sum = acc
      if (curr >= 65 && curr <= 90) {
        sum += curr
      }

      return sum
    }, 0) === 2015
  )
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.')) // true
console.log(isPangram('This is not a pangram.')) // false
