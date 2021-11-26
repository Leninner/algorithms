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
