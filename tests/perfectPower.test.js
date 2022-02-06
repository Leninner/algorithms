import { perfectPower } from '../code/perfectPower.js';

describe('Is a perfect power', () => {
  const testCases = [
    [16, [4, 2]],
    [81, [9, 2]],
    [5, null],
    [216, [6, 3]],
    [343, [7, 3]],
    [4492125, [165, 3]],
  ];

  testCases.forEach((testCase) => {
    it(`should return ${testCase[1]} for ${testCase[0]}`, () => {
      expect(perfectPower(testCase[0])).toEqual(testCase[1]);
    });
  });
});
