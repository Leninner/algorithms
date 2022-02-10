// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// ANOTHER SOLUTION:

// for (let i = 0; i < arr.length; i++) {
//   val = arr.includes(k - arr[i]) ? true : false;

//   if (val) break;
// }

// return val;

const sumOfTwo = (arr, k) => {
  return arr.some((value, index) => {
    if (arr.includes(k - value) && index !== arr.indexOf(k - value)) {
      return true;
    } else {
      return false;
    }
  }); // comprueban si hay algún para de números que cumplen la condicion de sumar k
};

export default sumOfTwo;

const sumOfTwoRevisited = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array.includes(target - array[i]) && array.indexOf(target - array[i]) !== i) {
      return [i, array.indexOf(target - array[i])];
    }
  }

  return 'No se encontró ningún par';
};

console.log(sumOfTwoRevisited([9, 6, 4, 2, 2, 2, 2, 2], 15));
