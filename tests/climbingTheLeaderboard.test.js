import { climbingLeaderboard } from '../code/climbingTheLeaderboard';

test('Debe dar un resultado correcto', () => {
  expect(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])).toStrictEqual([9, 7, 5, 3, 1]);
  expect(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [70, 80, 90, 100, 110])).toStrictEqual([5, 4, 3, 2, 1]);
});
