function bigSorting(arreglo) {
  let aux = arreglo[0]
  for (let i = 0; i < arreglo.length - 1; i++) {
    for (let y = 0; y < arreglo.length - 1; y++) {
      if (arreglo[y] > arreglo[y + 1]) {
        aux = arreglo[y]
        arreglo[y] = arreglo[y + 1]
        arreglo[y + 1] = aux
      }
    }
  }
  console.log(arreglo)
}

bigSorting([7895451623, 1, 2, 9, 1, 1, 1])
