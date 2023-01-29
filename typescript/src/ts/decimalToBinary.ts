const decimalToBinary = (decimalNumber: number) => {
  let binaryNumber = ''
  let quotient = decimalNumber

  while (quotient !== 1) {
    binaryNumber += quotient % 2
    quotient = Math.floor(quotient / 2)
  }

  return binaryNumber.concat(quotient.toString()).split('').reverse().join('')
}

decimalToBinary(10) // 1010
decimalToBinary(20) // 10100
decimalToBinary(100) // 1100100
decimalToBinary(1000) // 1111101000
