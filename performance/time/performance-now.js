const contar = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i + 1);
  }
};

let initialTime = performance.now();
contar(5);
let finalTime = performance.now();

console.log(`Elapsed time: ${finalTime - initialTime} ms`);
