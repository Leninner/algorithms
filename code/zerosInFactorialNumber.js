// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript

const zeros = (n) => {
  let result = 0
  let x = 1

  while (5 ** x <= n) {
    result += Math.floor(n / 5 ** x)
    x++
  }

  return result
}

console.log(zeros(5))
console.log(zeros(10))
console.log(zeros(100))
console.log(zeros(1000))
console.log(zeros(10000))
console.log(zeros(100000))
console.log(zeros(1000000))
