// https://www.hackerrank.com/challenges/picking-numbers/problem?isFullScreen=true/

/**
 * 0 < a.length < 100
 * @param {*} a array of numbers
 * @returns {number} el array más largo de números que al restarse y sacar su absoluto el resultado es <= 1
 */

const pickingNumbers = (a) => {
  const frecuencia = new Array(101).fill(0)
  let result = Number.MIN_VALUE

  for (let i = 0; i < a.length; i++) {
    const index = a[i]
    frecuencia[index]++ // frecuencia[index] = frecuencia[index] + 1;
  }

  for (let i = 1; i <= 100; i++) {
    result = Math.max(result, frecuencia[i] + frecuencia[i - 1])
  }

  return result
}

export default pickingNumbers
