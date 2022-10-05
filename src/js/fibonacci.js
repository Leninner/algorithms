// calcular  la serie de fibonaacci  e ir imprimiéndola en la pantalla

// export const fibonacci = (n) => {
//   let a = 1
//   let b = 0
//   let curr = 0

//   let i = 0
//   while (i < n) {
//     curr = a + b
//     a = b
//     b = curr
//     i++
//   }
// }

// export const fibonacciRevisited = (n) => {
//   if (n === 0 || n === 1) return n
//   let a = 1
//   let b = 0
//   let c

//   for (let i = 0; i < n; i++) {
//     c = a + b
//     a = b
//     b = c
//   }

//   return c
// }

// calcular la serie de  fibonacci e ir almacenando  los resultados en un arreglo

export const fibonacciInArray = (n) => {
  const array = []
  let a = 1
  let b = 0
  let curr = 0

  while (array.length < n) {
    curr = a + b
    array.push(curr)
    a = b
    b = curr
  }

  return array
}

// // Serie de fibonacci con recursividad

// export const fibonacciRecursive = (n) => {
//   if (n === 0 || n === 1) return n
//   return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
// }

// // Recursividad con memoization

// export const fibonacciMemoization = (n, memo = []) => {
//   if (memo[n] !== undefined) return memo[n]
//   if (n === 0 || n === 1) return n
//   return (memo[n] =
//     fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo))
// }
