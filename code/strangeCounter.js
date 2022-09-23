// https://www.hackerrank.com/challenges/strange-code/problem

/*
 * Complete the 'strangeCounter' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER t as parameter.
 */

function strangeCounter(t) {
  // NOTE: Solución para números pequeños

  // let cont = 4,
  //     aux = 3,
  //     i = 1;

  // while (i <= t) {
  //     cont--;
  //     if (cont == 0) {
  //         cont = aux * 2;
  //         aux = cont;
  //         i++;
  //     } else {
  //         i++;
  //     }
  // }

  // return cont;

  // NOTE: Solución buena para números realmente grandes

  let cont = 3

  while (t > cont) {
    t = t - cont
    cont *= 2
  }

  return cont - t + 1
}

// console.log(strangeCounter(4)); // 6
console.log(strangeCounter(99999997668)) // 3079217434
