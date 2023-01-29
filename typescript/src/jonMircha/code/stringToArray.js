// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const stringToArray = (cadena, separador) => {
  if (typeof cadena !== 'string' || typeof separador !== 'string') {
    return false
  }
  return cadena.split(separador)
}

export { stringToArray }
