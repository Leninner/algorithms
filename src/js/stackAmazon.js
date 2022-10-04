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
          let max = acc
          if (acc < curr) {
            max = curr
          }

          return max
        })
      : null
  }
}

const stack = new StackAmazon()

stack.push(1)
stack.push(45)
stack.push(2)
stack.pop()
stack.max()
stack.getArreglo()
stack.pop()
stack.pop()
stack.pop()
stack.getArreglo()
stack.max()
