const decimalToBinary = (decimalNumber: number) => {
  let binaryNumber = '';
  let quotient = decimalNumber;

  while (quotient !== 1) {
    binaryNumber += quotient % 2;
    quotient = Math.floor(quotient / 2);
  }

  return binaryNumber.concat(quotient.toString()).split('').reverse().join('');
};

console.log(decimalToBinary(10)); // 1010
console.log(decimalToBinary(20)); // 10100
console.log(decimalToBinary(100)); // 1100100
console.log(decimalToBinary(1000)); // 1111101000
