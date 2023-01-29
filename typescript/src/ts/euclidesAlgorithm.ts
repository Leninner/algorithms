/**
 * Algoritmo de Euclides para obtener el MCD de dos números
 * @param a Número entero
 * @param b Número entero
 * @returns MCD
 */
export const euclidesAlgorithm = (a: number, b: number): number => {
  // Inicializamos las matrices X, Y y Z con los valores iniciales
  const X = [
    [1, 0],
    [0, 1],
  ]
  const Y = [
    [a, b],
    [0, 0],
  ]
  const Z = [
    [a, b],
    [0, 0],
  ]

  // Iteramos mientras el segundo elemento de la fila 1 de la matriz Y sea distinto de 0
  while (Y[1][1] !== 0) {
    // Calculamos la división entera del primer elemento de la fila 1 de la matriz Y por el segundo elemento de la misma fila
    const q = Math.floor(Y[1][0] / Y[1][1])

    // Actualizamos la matriz Y con el resultado de la resta del primer elemento de la fila 1 de la matriz Y por el producto del segundo elemento de la misma fila por q
    Y[1][0] -= q * Y[1][1]

    // Actualizamos la matriz X con el resultado de la resta del primer elemento de la fila 1 de la matriz X por el producto del segundo elemento de la misma fila por q
    X[1][0] -= q * X[1][1]

    // Intercambiamos las filas de la matriz Y
    ;[Y[0], Y[1]] = [Y[1], Y[0]]

    // Intercambiamos las filas de la matriz X
    ;[X[0], X[1]] = [X[1], X[0]]
  }

  // Devolvemos el MCD, x e y
  return Z[0][1]
}

export const getMCM = (a: number, b: number): number =>
  (a * b) / euclidesAlgorithm(a, b)
