const contar = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i + 1)
  }
}

const initialTime = performance.now()
contar(5)
const finalTime = performance.now()

console.log(`Elapsed time: ${finalTime - initialTime} ms`)
