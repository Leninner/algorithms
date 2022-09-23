/**
 * Este algoritmo hace una búsqueda lineal para encontrar un elemento en un arreglo.
 * Complejidad temporal = O(n +  3) = O(n)
 * Complexidad espacial = O(1)
 */

export const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    // O (n)
    if (array[i] === target) {
      // O (1)
      return i // O (1)
    }
  }

  return -1 // O (1)
}
