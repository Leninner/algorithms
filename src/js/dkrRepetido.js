/**
 * The goal for this challenge is find the first repeated number in an array.
 */

// Solution one, Complejidad temporal: O(n^2), Complejidad espacial: O(1)

const drkRepetido = (arr) =>
  arr.find((num, index) => arr.indexOf(num) !== index) // O(n^2)
const initialTimeOne = performance.now()
drkRepetido([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30, 1,
])
const finalTimeOne = performance.now()

console.log(`Elapsed time in solution One: ${finalTimeOne - initialTimeOne} ms`)

// Solution two, Complejidad Temporal: O(n), Complejidad Espacial: O(n)

const drkRepetidoDos = (arreglo) => {
  const results = {}

  for (let i = 0; i < arreglo.length; i++) {
    // O(n)
    if (results[arreglo[i]]) {
      break
    } else {
      results[arreglo[i]] = arreglo[i]
    }
  }

  return Object.values(results)[0]
}

const initialTime = performance.now()
drkRepetidoDos([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30, 1,
])
const finalTime = performance.now()
console.log(`Elapsed time in solution Two: ${finalTime - initialTime} ms`)
