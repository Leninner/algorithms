// Encontrar el menor entre 2 números enteros positivos sin utilizar condicionales u operadores ternarios

const menorOfTheNumber = (a, b) => {
  let auxA = a
  let mayor = b
  // Necesitamos utilizar un while y una variable auxiliar para ir aumentando su valor con cada decremento del while
  // Después de que una de las 2 variables llegue a 0 tendrémos el valor del menor, guardado en la variable menor.
  let menor = 0
  while (auxA && mayor) {
    auxA--
    mayor--
    menor++
  }
  console.log(menor)
}

menorOfTheNumber(56, 9)
menorOfTheNumber(12, 145)

// Comprobar si dos números enteros positivos son iguales sin utilizar operadores de comparación ni, suma y resta.

const equalNumbers = (a, b) => {
  console.log(!(a ^ b)) // El OR exclusivo devuelve 0 cuando ambos elementos son iguales y 0 en Javascript es falso
  // Por esta razón hago uso del operador NO
}

equalNumbers(12, 112)
equalNumbers(2, 2)

// Intercambiar el valor de 2 variables sin utilizar una variable auxiliar

const intercambio = (a, b) => {
  let auxA = a
  let auxB = b
  auxA = auxA + auxB
  auxB = auxA - auxB
  auxA = auxA - auxB
  console.log(auxA, auxB)
}

intercambio(1, 85)

// Sumar 2 números sin utilizar el operador de suma

/// ///Solución de la regla matemática de ley de signos
// const sumasinSuma(a, b) => {
//     console.log(a - -b);
// }

// Mi solución
const sumasinSuma = (a, b) => {
  const array = []
  for (let i = 0; i < a + b; i++) {
    array.push(1)
  }
  console.log(array.length)
}

sumasinSuma(109, 1)
sumasinSuma(56, 23)
sumasinSuma(0, 1)
