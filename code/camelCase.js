function toCamelCase(str) {
  let arregloStr
  let stringFinal = ''

  if (str == '') {
    return ''
  } else if (str.includes('_')) {
    arregloStr = str.split('_')
  } else if (str.includes('-')) {
    arregloStr = str.split('-')
  }

  if (str[0] !== str[0].toUpperCase()) {
    stringFinal += arregloStr[0]
    for (let i = 1; i < arregloStr.length; i++) {
      if (arregloStr[i][0] !== arregloStr[i][0].toUpperCase()) {
        stringFinal += arregloStr[i][0].toUpperCase()
        stringFinal += arregloStr[i].toString().substr(1)
      } else {
        stringFinal += arregloStr[i]
      }
    }
  } else {
    for (let i = 0; i < arregloStr.length; i++) {
      if (arregloStr[i][0] !== arregloStr[i][0].toUpperCase()) {
        stringFinal += arregloStr[i][0].toUpperCase()
        stringFinal += arregloStr[i].toString().substr(1)
      } else {
        stringFinal += arregloStr[i]
      }
    }
  }

  return stringFinal
}

console.log(toCamelCase('the_stealth_warrior')) // "theStealthWarrior"
console.log(toCamelCase('The-Stealth-Warrior')) // "TheStealthWarrior"
console.log(toCamelCase('A-B-C')) // "ABC"
console.log(toCamelCase(''))
