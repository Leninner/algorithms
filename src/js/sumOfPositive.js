const sumOfPositive = (arrayOfNumbers) =>
  arrayOfNumbers.reduce((acc, curr) => {
    let sum = acc
    if (!(curr < 0)) {
      sum += curr
    }

    return sum
  }, 0)

sumOfPositive([1, 2, 4, -7, -8, 9])
