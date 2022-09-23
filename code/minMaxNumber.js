/**
 *
 * @param {string} numbers
 * @returns {string} max and min number
 */

const highAndLow = (numbers) => {
  const arrayOfNumbers = numbers.split(' ')

  const max = arrayOfNumbers.reduce((acc, curr) => {
    acc = Math.max(acc, curr)

    return acc
  })

  const min = arrayOfNumbers.reduce((acc, curr) => {
    acc = Math.min(acc, curr)

    return acc
  })

  return [max, min].join(' ')
}

// another solution

const highAndLow2 = (numbers) => {
  const arrayOfNumbers = numbers.split(' ').map(Number)
  const max = Math.max(...arrayOfNumbers)
  const min = Math.min(...arrayOfNumbers)

  return `${max} ${min}`
}

console.log(highAndLow2('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'))
