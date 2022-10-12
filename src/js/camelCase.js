const toCamelCase = (str) => {
  if (str === '') return ''
  let arregloStr
  let stringFinal = ''

  if (str.includes('_')) {
    arregloStr = str.split('_')
  }

  if (str.includes('-')) {
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

    return
  }

  for (let i = 0; i < arregloStr.length; i++) {
    if (arregloStr[i][0] !== arregloStr[i][0].toUpperCase()) {
      stringFinal += arregloStr[i][0].toUpperCase()
      stringFinal += arregloStr[i].toString().substr(1)
    } else {
      stringFinal += arregloStr[i]
    }
  }

  return stringFinal
}

toCamelCase('the_stealth_warrior') // "theStealthWarrior"
toCamelCase('The-Stealth-Warrior') // "TheStealthWarrior"
toCamelCase('A-B-C') // "ABC"
toCamelCase('')
