function addTogether() {
  if (
    typeof arguments[0] !== 'number' ||
    arguments[1] && typeof arguments[1] !== 'number'
  ) {
    return undefined
  }

  if (arguments.length === 2) {
    return arguments[0] + arguments[1]
  }

  return (b) => (typeof b === 'number' ? arguments[0] + b : undefined)
}

const addFive = addTogether(5)

console.log(addFive(2)) // 7

console.log(addTogether(2, 3))

console.log(addTogether('Leninner'))
