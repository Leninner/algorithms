// Encontrar el menor entre 2 números enteros positivos sin utilizar condicionales u operadores ternarios

function menorOfTheNumber(a, b) {
  // Necesitamos utilizar un while y una variable auxiliar para ir aumentando su valor con cada decremento del while
  // Después de que una de las 2 variables llegue a 0 tendrémos el valor del menor, guardado en la variable menor.
  let menor = 0
  while (a && b) {
    a--
    b--
    menor++
  }
  console.log(menor)
}

menorOfTheNumber(56, 9)
menorOfTheNumber(12, 145)

// Comprobar si dos números enteros positivos son iguales sin utilizar operadores de comparación ni, suma y resta.

function equalNumbers(a, b) {
  console.log(!(a ^ b)) // El OR exclusivo devuelve 0 cuando ambos elementos son iguales y 0 en Javascript es falso
  // Por esta razón hago uso del operador NO
}

equalNumbers(12, 112)
equalNumbers(2, 2)

// Intercambiar el valor de 2 variables sin utilizar una variable auxiliar

function intercambio(a, b) {
  a = a + b
  b = a - b
  a = a - b
  console.log(a, b)
}
intercambio(1, 85)

// Sumar 2 números sin utilizar el operador de suma

/// ///Solución de la regla matemática de ley de signos
// function sumasinSuma(a, b) {
//     console.log(a - -b);
// }

// Mi solución
function sumasinSuma(a, b) {
  const array = []
  for (let i = 0; i < a + b; i++) {
    array.push(1)
  }
  console.log(array.length)
}

sumasinSuma(109, 1)
sumasinSuma(56, 23)
sumasinSuma(0, 1)
