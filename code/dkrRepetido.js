/**
 * The goal for this challenge is find the first repeated number in an array.
 */

// Solution one

const drkRepetido = (arr) => {
  return arr.find((num, index) => arr.indexOf(num) !== index);
};

console.log(
  drkRepetido([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1,
  ])
);

// Solution two

const drkRepetidoDos = (arreglo) => {
  let results = {};

  for (let i = 0; i < arreglo.length; i++) {
    if (results[arreglo[i]]) {
      break;
    } else {
      results[arreglo[i]] = arreglo[i];
    }
  }

  return Object.values(results)[0];
};

console.log(
  drkRepetidoDos([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1,
  ])
);
