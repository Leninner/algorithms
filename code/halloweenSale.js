// https://www.hackerrank.com/challenges/halloween-sale/problem

// int p: the price of the first game
// int d: the discount from the previous game price
// int m: the minimum cost of a game
// int s: the starting budget

const howManyGames = (p, d, m, s) => {
  // Return the number of games you can buy

  // NOTE: Solución correcta

  let games = 0
  while (s >= 0) {
    // eslint-disable-next-line no-param-reassign
    s -= p
    // eslint-disable-next-line no-param-reassign
    p = Math.max(p - d, m) // El método Math.max devuelve el mayor entre 2 números
    games += 1
  }
  console.log(games - 1)

  // NOTE: Solución deficiente

  // let suma = 0,
  //     cont = 0;
  // for (let i = p; i > m; i -= d) {
  //     cont++;
  //     suma += i;
  // }

  // if (suma == s) {
  //     return cont;
  // } else {
  //     while (suma <= s) {
  //         cont++;
  //         suma += m;
  //         if (suma >= s) {
  //             cont--;
  //         }
  //     }
  //     return cont;
  // }
}

howManyGames(20, 3, 6, 70) // 5 games
howManyGames(20, 3, 6, 80) // 6 games
howManyGames(20, 3, 6, 85) // 7 games
howManyGames(13, 74, 1, 237) // 225 games
