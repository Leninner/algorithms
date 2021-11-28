/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
  // Write your code here

  let result = ranked.concat(player).sort((a, b) => b - a);

  let unique = [...new Set(result)]; // Función para encontrar los valores únicos de un array, no funciona con un array de strings u objetos

  let valores = {};

  unique.forEach((element, index) => {
    if (element === player[player.indexOf(element)]) {
      valores[element] = index + 1;
    }
  });

  return Object.values(valores);
}

export { climbingLeaderboard };

// NOTE: Solución de 12 puntos para el mismo ejercicio. Tiene problemas con el tiempo

/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

// function climbingLeaderboard(ranked, player) {
//   let positions = [];
//   let newArray = [...ranked.filter((x, index) => x !== ranked[index + 1])];
//   let minArray = [...player.filter((x, index) => x !== ranked[index + 1])];

//   minArray.forEach((value) => {
//     newArray.push(value);
//     newArray.sort((a, b) => b - a).filter((x, index) => x !== ranked[index + 1]);
//     positions.push(newArray.indexOf(value) + 1);
//   });

//   return positions;
// }

// console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]));
