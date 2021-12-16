import { climbingLeaderboard } from '../code/climbingTheLeaderboard';

xtest('Debe dar un resultado correcto', () => {
  expect(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])).toStrictEqual([6, 5, 4, 2, 1]);
  expect(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])).toStrictEqual([6, 4, 2, 1]);
});
