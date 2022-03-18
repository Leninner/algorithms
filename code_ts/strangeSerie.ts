/**
 *
 * @param {number} a Primer número
 * @param {number} b Segundo número
 * @param {number} n Número final de exponentes de 2
 * @link https://www.hackerrank.com/challenges/java-loops/problem?h_r=profile
 */

const strangeSerie = (a: number, b: number, n: number) => {
  let aux: number = 0;

  for (let i = 1; i <= n; i++) {
    aux = 0;

    for (let j = 0; j < i; j++) {
      aux += 2 ** j * b;
    }

    console.log(a + aux);
  }
};

strangeSerie(0, 2, 10); // 2 6 14 30 62 126 254 510 1022 2046
strangeSerie(1, 2, 10); // 3 7 15 31 63 127 255 511 1023 2047
strangeSerie(1, 3, 10); // 4 10 22 46 94 190 382 766 1534 3070
strangeSerie(5, 3, 5); // 8 14 26 50 98
