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

zeros(5)
zeros(10)
zeros(100)
zeros(1000)
zeros(10000)
zeros(100000)
zeros(1000000)
