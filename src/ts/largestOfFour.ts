const largestOfFour = (arr: number[][]): number[] =>
  arr.map((x) => Math.max(...x))

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
)

const titleCase = (str: string) =>
  str
    .toLowerCase()
    .split(' ')
    .map((value) => `${value.charAt(0).toUpperCase()}${value.slice(1)}`)
    .join(' ')

console.log(titleCase("I'm a little tea pot"))

const frankenSplice = (arr1: number[], arr2: number[], n: number) => {
  const newArr = [...arr2]
  const firstElement = newArr.splice(n - 1, 1)
  const array = [...arr1, ...newArr]
  array.sort((a, b) => a - b)
  array.unshift(...firstElement)
  return array.flat()
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))

const bouncer = (arr: Array<number | boolean | string>) =>
  arr.filter((value) => Boolean(value))

console.log(bouncer([7, 'ate', '', false, 9]))

const getIndexToIns = (arr: number[], num: number) => {
  const orderedArr = arr.sort((a, b) => a - b)
  let currentIndex = orderedArr.length

  for (let i = 0; i < orderedArr.length; i++) {
    if (num <= orderedArr[i]) {
      currentIndex = i
      break
    }
  }

  return currentIndex
}

console.log(getIndexToIns([2, 5, 10], 15))

const mutation = (arr: string[]) =>
  arr[1]
    .toLowerCase()
    .split('')
    .every((letter) => arr[0].toLowerCase().includes(letter))

mutation(['hello', 'hey'])

const chunkArrayInGroups = (arr: string[], size: number) => {
  const newArr = []

  while (arr.length) {
    newArr.push(arr.splice(0, size))
  }

  return newArr
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2))
