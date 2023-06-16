// https://www.hackerrank.com/challenges/utopian-tree/problem

export const utopianTree = (n) => {
  let size = 1

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      size *= 2
    } else {
      size++
    }
  }

  return size
}
