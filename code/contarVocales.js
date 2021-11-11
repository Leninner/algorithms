// Encontrar el número de letras encontradas utilizando expresiones regulares

function getCount(str) {
  let expresion = /[a,e,i,o,u]/gi;
  let array_emparejamientos = str.match(expresion);

  if (!array_emparejamientos) {
    return 0;
  } else {
    return array_emparejamientos.length;
  }
}

// function getCount(str) {
//     return str.replace(/[^aeiou]/gi, '').length;
//   }

console.log(getCount('my pyx')); // 0
