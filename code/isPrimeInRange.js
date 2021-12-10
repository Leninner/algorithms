// Crear una función que determine si un número es primo o no en un rango determinado.
/**
 *
 * @param {inicio del rango} a
 * @param {fin del rango} b
 */

export const isPrimeInRange = (a, b) => {
  let primes = [];

  for (let i = a; i <= b; i++) {
    let cont = 0;

    for (let j = 0; j <= i; j++) {
      if (i % j === 0) {
        cont++;
      }
    }

    cont > 2 ? '' : primes.push(i);
  }

  return primes;
};
