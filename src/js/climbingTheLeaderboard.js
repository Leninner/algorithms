/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

const climbingLeaderboard = (ranked, player) => {
  const rankedRefactorized = Array.from(new Set(ranked))
  const results = []

  for (let i = 0; i < player.length; i++) {
    rankedRefactorized.push(player[i])
    rankedRefactorized.sort((a, b) => b - a)
    results.push(rankedRefactorized.indexOf(player[i]) + 1)
  }

  return results
}

export { climbingLeaderboard }

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
