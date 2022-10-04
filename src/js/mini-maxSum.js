export const miniMaxSum = (arr) => {
  let valor = 0
  let max = 0
  let y = 0
  const arreglo = []
  while (y < arr.length) {
    valor = 0
    for (let i = 0; i < arr.length; i++) {
      if (i !== y) {
        valor += arr[i]
      }
    }
    if (valor > max) {
      max = valor
    }
    arreglo.push(valor)
    y++
  }
  let min = arreglo[0]
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] <= min) {
      min = arreglo[i]
    }
  }

  return [min, max]
}

// miniMaxSum([1, 3, 5, 7, 9]);

const multiplayIntegers = (array) => {
  let max = 0
  let product = 0

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      for (let k = j; k < array.length; k++) {
        product = array[i] * array[j] * array[k]
        product > max ? (max = product) : max
      }
    }
  }

  return max
}

multiplayIntegers([-10, -10, 5, 2])
