/**
 *
 * @param {strs} arreglo de strings
 * @returns {string} prefixes en común
 */

// export const longestCommonPrefix = (strs) => {
//   return strs.reduce((acumulador, current) => {
//     if (current === '') return '';
//     for (let i = 0; i < acumulador.length; i++) {
//       if (acumulador[i] !== current[i]) return current.slice(0, i);
//     }
//     return acumulador;
//   });
// };

// regex for replace all numbers in a string
// const regex = /\d+/g;

export const longestCommonPrefix = (strs) => {
  if (strs.includes('')) return ''

  const obj = {}
  let answer = true
  const main = strs.join('')

  for (let i = 0; i < main.length; i++) {
    if (obj[main[i]]) {
      obj[main[i]]++
    } else {
      obj[main[i]] = 1
    }
  }

  const arr = Object.entries(obj).filter((value) => value[1] === strs.length)

  for (let i = 0; i < strs.length; i++) {
    if (!strs[i].includes(arr[0][0])) {
      answer = false
      break
    }
  }

  return answer ? arr.flat().join('').replace(/\d+/g, '') : ''
}
