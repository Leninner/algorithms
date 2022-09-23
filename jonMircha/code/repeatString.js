// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repeatString = (cadena, number) => {
  if (typeof cadena !== 'string' || typeof number !== 'number') {
    return false
  }

  let stringRepetido = ''
  for (let i = 1; i <= number; i++) {
    stringRepetido += ` ${cadena}`
  }
  return stringRepetido.slice(1)
}

export { repeatString }
