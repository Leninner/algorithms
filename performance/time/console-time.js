const contar = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i + 1);
  }
};

console.time('duracion del algoritmo');
contar(5);
console.timeEnd('duracion del algoritmo');
