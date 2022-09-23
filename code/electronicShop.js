// https://www.hackerrank.com/challenges/electronics-shop/problem

// keyboards = precios de los teclados
// drives = precio de los drives
// b = budget
// TODO: Encuentre el costo para comprarlos. Si no es posible comprar ambos artículos, devuélva -1.

function getMoneySpent(keyboards, drives, b) {
  const prices = []
  let mayor = 0

  keyboards.forEach((keyboard) => {
    drives.forEach((drive) => {
      if (keyboard + drive <= b) {
        prices.push(keyboard + drive)
      }
    })
  })

  prices.forEach((precio) => {
    precio > mayor ? mayor = precio : mayor = mayor
  })

  if (mayor == 0) {
    console.log(-1)
    return -1
  } else {
    console.log(mayor)
    return mayor
  }
}

getMoneySpent([50, 40, 60], [5, 8, 12], 60) // 58
getMoneySpent([3, 1], [5, 2, 8], 10) // 9
getMoneySpent([4], [5], 5) // -1
