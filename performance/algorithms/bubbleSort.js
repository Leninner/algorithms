/**
 * Este algoritmo hace un ordenamiento burbuja para encontrar un elemento en un arreglo.
 * Complejidad temporal = O(n^2 + 9) = O(n^2)
 */

function bubbleSort(array) {
  let swapped = true; // O (1)
  let j = 0; // O (1)

  while (swapped) {
    // O (n)
    swapped = false; // O (1)
    j++; // O (1)

    for (let i = 0; i < array.length - j; i++) {
      // O (n)
      if (array[i] > array[i + 1]) {
        // O (1)
        let tmp = array[i]; // O (1)
        array[i] = array[i + 1]; // O (1)
        array[i + 1] = tmp; // O (1)
        swapped = true; // O (1)
      }
    }
  }

  return array; // O (1)
}
