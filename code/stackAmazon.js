class StackAmazon {
  constructor() {
    this.arreglo = []
  }

  getArreglo() {
    return this.arreglo
  }

  push(value) {
    this.arreglo.push(value)
  }

  pop() {
    return this.arreglo.length ? this.arreglo.shift() : null
  }

  max() {
    return this.arreglo.length
      ? this.arreglo.reduce((acc, curr) => {
          if (acc < curr) {
            acc = curr
          }

          return acc
        })
      : null
  }
}

const stack = new StackAmazon()

stack.push(1)
stack.push(45)
stack.push(2)
stack.pop()
console.log(stack.max())
console.log(stack.getArreglo())
stack.pop()
stack.pop()
console.log(stack.pop())
console.log(stack.getArreglo())
console.log(stack.max())
