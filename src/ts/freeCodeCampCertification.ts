// NOTE: Palindrome Checker

const plainStr = (str: string) => str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

export const palindrome = (str: string): boolean =>
  plainStr(str).split('').reverse().join('') ===
  plainStr(str).split('').join('')

// console.log(palindrome('eye'));
// console.log(palindrome('race CAR'));
// console.log(palindrome('1 eye for of 1 eye.'));
// console.log(palindrome('My age is 0, 0 si ega ym.'));

// NOTE: Roman Numeral Converter

/**
 * Cuando un símbolo aparece después de uno mayor  o igual, se añaden
 * Cuando un símbolo aparece antes de uno mayor, se resta el mayor - el menor
 * No se puede usar el símbolo más de 3 veces
 */

// Roman Numeral Converter

/**
 * Cuando un símbolo aparece después de uno mayor  o igual, se añaden
 * Cuando un símbolo aparece antes de uno mayor, se resta el mayor - el menor
 * No se puede usar el símbolo más de 3 veces
 */
const getDescomposedNumber = (number: number) => {
  let temporalNumber = number
  const descomposeNumber = []
  let numberSize = number.toString().length
  let divisor = Math.pow(10, numberSize - 1)
  let aux = 0

  while (temporalNumber) {
    aux = Math.floor(number / divisor) * divisor
    descomposeNumber.push(aux)
    temporalNumber = temporalNumber % divisor
    numberSize = temporalNumber.toString().length
    divisor = Math.pow(10, numberSize - 1)
  }

  return descomposeNumber
}

export const convertToRoman = (num: number) => {
  const ROMAN_NUMBERS = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  const posibleWays: any = []

  const numberDescomposed = getDescomposedNumber(num)
  const romanNumbers = Object.entries(ROMAN_NUMBERS)

  const array = [1, 2, 3]

  numberDescomposed.forEach((number) => {
    for (let i = 0; i < romanNumbers.length; i++) {
      const [key, value] = romanNumbers[i]

      if (number / value <= 3 && (number / value) % 1 === 0) {
        posibleWays.push([key.repeat(number / value)])
        break
      }

      const upper500 =
        (number % value) / Math.pow(10, number.toString().length - 1)

      if (array.includes(upper500)) {
        posibleWays.push([key + romanNumbers[i - 1][0].repeat(upper500)])
        break
      }

      const l = [4, 40, 400]

      if (number % value === number) {
        if (l.includes(number)) {
          posibleWays.push([romanNumbers[i - 1][0] + key])
        } else {
          posibleWays.push([romanNumbers[i - 2][0] + key])
        }

        break
      }
    }
  })

  // A partir de aquí, estamos comprobando que no se hayan repetido valores como VV, LL, DD. Caso contrario, vamos a intercambiarlo por el inmediato superior, por ejemplo, VV por L, LL por C, DD por M.
  const result = posibleWays.flat().join('').split('')

  const posibles: any = {
    V: 'X',
    L: 'C',
    D: 'M',
  }

  for (let i = 0; i < result.length - 1; i++) {
    if (result[i] === result[i + 1] && result[i] in posibles) {
      result[i] = posibles[result[i]]
      result.splice(i + 1, 1)
    }
  }

  return result.join('')
}

// console.log(convertToRoman(99));

// NOTE: Caesars Cipher

// La función debe aceptar signos de puntuación y espacios y no borrarlos durante la ejecución del programa
// Todos los inputs van a ser strings y si son letras, van a ser Mayúsculas
// Ascii Range A-Z: 65-90

export const rot13 = (str: string) => {
  const codesFromStr = str.split('').map((value) => value.charCodeAt(0))

  return codesFromStr
    .map((value: number) => {
      if (value >= 65 && value <= 90) {
        if (value - 13 <= 64) {
          return 90 - (64 - (value - 13))
        }

        return value - 13
      }

      return String.fromCharCode(value)
    })
    .join('')
}

// console.log(rot13('SERR PBQR PNZC.'));

// NOTE: Telephone Number Validator

export const telephoneCheck = (str: string) => {
  const regExp = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/
  // .test() retorna true or false
  return regExp.test(str)
}

// telephoneCheck('1 555)-55-5555');

// NOTE: Cash Register

const checkCashRegister = (price: number, cash: number, cid: any[]) => {
  let change = cash - price
  const aux = change

  const validate = cid.reduce((acc, [, value]) => acc + value, 0)

  if (validate < aux) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] }
  }

  if (validate === aux) {
    return { status: 'CLOSED', change: [...cid] }
  }

  const currencyUnit: { [key: string]: number } = {
    ONE_HUNDRED: 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  }

  const result = []

  while (change > 1) {
    for (let i = cid.length - 1; i >= 0; i--) {
      if (currencyUnit[cid[i][0]] <= change && cid[i][1] > 0) {
        change = parseFloat((change - currencyUnit[cid[i][0]]).toFixed(2))
        cid[i][1] -= currencyUnit[cid[i][0]]
        result.push([cid[i][0], currencyUnit[cid[i][0]]])
        break
      }
    }
  }

  const dollars: any = { QUARTER: 0.25, DIME: 0.1, NICKEL: 0.05, PENNY: 0.01 }

  if (
    cid[3][1] + cid[2][1] + cid[1][1] + cid[0][1] < aux &&
    result.length === 0
  ) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] }
  } else {
    while (change) {
      for (let i = 3; i >= 0; i--) {
        if (dollars[cid[i][0]] <= change && cid[i][1]) {
          change = parseFloat((change - dollars[cid[i][0]]).toFixed(2))
          cid[i][1] -= dollars[cid[i][0]]
          result.push([cid[i][0], dollars[cid[i][0]]])
          break
        }
      }
    }
  }

  return {
    status: 'OPEN',
    change: Object.entries(
      result.reduce((acc: { [key: string]: number }, [key, value]) => {
        if (acc[key]) {
          acc[key] += value
        } else {
          acc[key] = value
        }
        return acc
      }, {})
    ),
  }
}

checkCashRegister(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
])
