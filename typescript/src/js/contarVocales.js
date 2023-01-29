// Encontrar el número de letras encontradas utilizando expresiones regulares

const getCount = (str) => {
  const expresion = /[a,e,i,o,u]/gi
  const emparejamientos = str.match(expresion)

  if (!emparejamientos) {
    return 0
  }

  return emparejamientos.length
}

getCount('my pyx') // 0
