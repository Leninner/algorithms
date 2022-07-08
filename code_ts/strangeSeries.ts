const getStrangeSum = (indexOne: number, indexTwo: number) => {
  const FIRST_ODD_NUMBER = 7
  const FIRST_EVEN_NUMBER = 6

  let numberOne =
    indexOne % 2 === 0
      ? FIRST_EVEN_NUMBER - Math.floor(indexOne / 2 - 1) * 2
      : FIRST_ODD_NUMBER - Math.floor(indexOne / 2)

  let numberTwo =
    indexTwo % 2 === 0
      ? FIRST_EVEN_NUMBER - Math.floor(indexTwo / 2 - 1) * 2
      : FIRST_ODD_NUMBER - Math.floor(indexTwo / 2)

  return numberOne + numberTwo
}

console.log(getStrangeSum(2, 2)) // 12
