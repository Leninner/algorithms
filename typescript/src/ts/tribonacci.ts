export const tribonacci = (signature: number[], n: number) => {
  const tribonacci = n < 3 ? [...signature].splice(0, n) : [...signature]
  let a = signature[0]
  let b = signature[1]
  let c = signature[2]
  let fib = 0

  for (let i = 0; i < n - signature.length; i++) {
    fib = a + b + c
    tribonacci.push(fib)
    a = b
    b = c
    c = fib
  }

  return tribonacci
}
