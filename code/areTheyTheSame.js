// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

/**
 * @description Check if the second array have all the same elements as the first one power of 2
 * @param {Array} a
 * @param {Array} b
 * @returns {Boolean}
 */

const comp = (array1, array2) => {
  if (array1 === null || array2 === null) return false;

  const correctedArray = [...array1];
  const numberFinal = correctedArray.splice(-1);
  correctedArray.unshift(numberFinal);

  return JSON.stringify(correctedArray.map((value) => value ** 2)) === JSON.stringify(array2);
};

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));

const compRevisited = (array1, array2) => {
  if (array1 === null || array2 === null) return false;

  const orderedArrayOne = array1.sort((a, b) => a - b);
  const orderedArrayTwo = array2.map((value) => Math.sqrt(value)).sort((a, b) => a - b);

  console.log(orderedArrayOne, orderedArrayTwo);

  return JSON.stringify(orderedArrayOne) === JSON.stringify(orderedArrayTwo);
};

compRevisited([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]);
