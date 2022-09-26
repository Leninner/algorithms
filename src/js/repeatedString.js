// Solución buena  que funciona con números grandes

// function repeatedString(s, n) {
//     let c = 0,
//         ca = 0,
//         r = n % s.length;

//     for (let i = s.length; i-- > 0; ) {
//         if (s.charAt(i) == "a") {
//             ++c;

//             if (i < r) ++ca;
//         }
//     }

//     return ((n - r) / s.length) * c + ca;
// }

// Solución para N pequeños

const repeatedString = (s, n) => {
  const stringArray = s.split('')
  const con = 0
  let i = 0
  while (stringArray.length < n) {
    stringArray.push(stringArray[i])
    i++
  }
  s.filter(coincidencia)

  return con
}

const coincidencia = (elemento) => {
  if (elemento === 'a') {
    con++
  }
}

repeatedString('aba', 10)
repeatedString('a', 1000)
repeatedString('lenina', 15620)
repeatedString('carla', 123)
repeatedString('akljjsdfhajksdhhgjagka', 4500)
