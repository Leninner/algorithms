// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

// cc = string para ponerle una máscara

const maskify = (cc) => {
  let string = ''
  for (let i = 0; i < cc.length - 4; i++) {
    string += '#'
  }
  return string + cc.slice(-4) // Slice sirve para retornar una subcadena de texto. El primer argumento es el inicio y si no se declara un final, entonces toma toda la subcadena a partir del número de inicio indicado
}

console.log(maskify('4556364607935616')) // '############5616'
console.log(maskify('1')) // 1
console.log(maskify('11111')) // #1111
