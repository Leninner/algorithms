// https://www.codewars.com/kata/54d4c8b08776e4ad92000835/train/javascript

export const perfectPower = (n) => {
  const array = []

  for (let i = 2; i <= 9; i++) {
    if (Math.round(n ** (1 / i)) ** i === n) {
      array.push(Math.round(n ** (1 / i)))
      array.push(i)
      break
    }
  }

  return array.length ? array : null
}
