/**
 * Este algoritmo hace un ordenamiento por selección para encontrar un elemento en un arreglo.
 * Complejidad temporal = O(n^2 + 8) = O(n^2)
 */

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // O (n)
    let min = i; // O (1)

    for (let j = i + 1; j < array.length; j++) {
      // O (n)
      if (array[j] < array[min]) {
        // O (1)
        min = j; // O (1)
      }
    }

    if (min !== i) {
      // O (1)
      let tmp = array[i]; // O (1)
      array[i] = array[min]; // O (1)
      array[min] = tmp; // O (1)
    }
  }

  return array; // O (1)
}
