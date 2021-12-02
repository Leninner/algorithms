// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// ANOTHER SOLUTION:

// for (let i = 0; i < arr.length; i++) {
//   val = arr.includes(k - arr[i]) ? true : false;

//   if (val) break;
// }

// return val;

const sumOfTwo = (arr, k) => {
  return arr.some((value) => arr.includes(k - value)); // comprueban si hay algún para de números que cumplen la condicion de sumar k
};

export default sumOfTwo;
