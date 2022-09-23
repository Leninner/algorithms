const findOdd = (a) => {
  const counter = {}

  a.forEach((value) => {
    if (counter[value]) {
      counter[value]++
    } else {
      counter[value] = 1
    }
  })

  return parseInt(
    Object.entries(counter).find(([, value]) => value % 2 !== 0)[0]
  )
}

console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]))
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]))
