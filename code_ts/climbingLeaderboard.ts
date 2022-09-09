export const climbingLeaderboard = (
  ranked: number[],
  player: number[]
): number[] => {
  let result: number[] = [];
  let rankedUniques: number[] = [...new Set(ranked)];

  for (let i = 0; i < player.length; i++) {
    rankedUniques.push(player[i]);
    result.push(rankedUniques.sort((a, b) => b - a).indexOf(player[i]) + 1);
    rankedUniques.splice(rankedUniques.indexOf(player[i]), 1);
  }

  return result;
};
