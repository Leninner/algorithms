const sumOfPositive = (arrayOfNumbers) =>
  arrayOfNumbers.reduce((acc, curr) => {
    if (!(curr < 0)) {
      acc += curr
    }

    return acc
  }, 0)

console.log(sumOfPositive([1, 2, 4, -7, -8, 9]))
