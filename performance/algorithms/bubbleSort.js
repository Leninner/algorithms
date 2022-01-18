/**
 * Este algoritmo hace un ordenamiento burbuja para encontrar un elemento en un arreglo.
 * Complejidad temporal = O(n^2 + 9) = O(n^2)
 * Complexidad espacial = O(n)
 * Espacio auxiliar = Complexidad espacial - espacio temporal = O(1)
 */

function bubbleSort(array) {
  let swapped = true;
  let j = 0;

  while (swapped) {
    swapped = false;
    j++;

    for (let i = 0; i < array.length - j; i++) {
      if (array[i] > array[i + 1]) {
        let tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
        swapped = true;
      }
    }
  }

  return array;
}
