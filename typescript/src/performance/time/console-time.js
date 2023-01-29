const contar = (n) => {
  for (let i = 0; i < n; i++) {
    // eslint-disable-next-line no-console
    console.log(i + 1)
  }
}

// eslint-disable-next-line no-console
console.time('duracion del algoritmo')
contar(5)
// eslint-disable-next-line no-console
console.timeEnd('duracion del algoritmo')
