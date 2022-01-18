/**
 * Este algoritmo hace un ordenamiento por selección para encontrar un elemento en un arreglo.
 * Complejidad temporal = O(n^2 + 8) = O(n^2)
 * Complexidad espacial = O(n)
 * Espacio auxiliar = Complexidad espacial - espacio temporal = O(1)
 */

function selectionSort(array) {
  // O(n)
  for (let i = 0; i < array.length; i++) {
    // O(1)
    let min = i; // O(1)

    for (let j = i + 1; j < array.length; j++) {
      // O(1)
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (min !== i) {
      let tmp = array[i]; // O(1)
      array[i] = array[min];
      array[min] = tmp;
    }
  }

  return array;
}
