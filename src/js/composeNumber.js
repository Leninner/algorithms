export const composeNumber = (number) => {
  let result = ''
  let newNumber = number
  let numberSize = newNumber.toString().length
  let divisor = Math.pow(10, numberSize - 1)

  result += ` ${parseInt(newNumber / divisor) * divisor} `

  while (divisor >= 10) {
    newNumber = newNumber % divisor
    numberSize = newNumber.toString().length
    divisor = Math.pow(10, numberSize - 1)
    result += `${parseInt(newNumber / divisor) * divisor} `
  }

  return result
}

const composeNumber2 = (number) => {
  let result = ''
  const arrayOfNumbers = number.toString().split('')
  let numberSize

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    numberSize = arrayOfNumbers.length - i

    if (parseInt(arrayOfNumbers[i]) !== 0) {
      result += ` ${arrayOfNumbers[i]}`

      while (numberSize > 1) {
        result += '0'
        numberSize--
      }
    }
  }

  return result
}

// eslint-disable-next-line no-console
console.time('Solution O(n^2)')
// eslint-disable-next-line no-console
console.log(composeNumber2(450004578945))
// eslint-disable-next-line no-console
console.timeEnd('Solution O(n^2)')
