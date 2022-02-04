import {
  strangeScore,
  comprobateBrackets,
  moveNPositionClockwise,
  moveNPositionCounterClockwise,
} from '../code/turingChallenges.js';

xdescribe('Strange counter in basketball', () => {
  const testCases = [
    ['5', '2', 'C', 'D', '+'],
    ['1', '2', '+', 'D'],
    ['6', '78', '+', '2', 'C', 'D'],
    ['1', '8', '+', '3', '-8', 'C', 'D'],
  ];

  const edgeCases = [
    ['1', '2', '+', 'D', 'C'],
    ['1', '2', '+', 'D', 'C', 'D'],
    ['1', '2', '+', 'D', 'C', 'D', 'C'],
    ['1', '2', '+', 'D', 'C', 'D', 'C', 'D'],
    ['1', '2', '+', 'D', 'C', 'D', 'C', 'D', 'C'],
    ['1', '2', '+', 'D', 'C', 'D', 'C', 'D', 'C', 'D'],
    ['1', '2', '+', 'D', 'C', 'D', 'C', 'D', 'C', 'D', 'C'],
  ];

  test('Should return correct answers', () => {
    expect(strangeScore(testCases[0])).toBe(30);
    expect(strangeScore(testCases[1])).toBe(12);
    expect(strangeScore(testCases[2])).toBe(336);
    expect(strangeScore(testCases[3])).toBe(27);
  });

  test('Should return correct answers with edge cases', () => {
    expect(strangeScore(edgeCases[0])).toBe(6);
    expect(strangeScore(edgeCases[1])).toBe(12);
    expect(strangeScore(edgeCases[2])).toBe(6);
    expect(strangeScore(edgeCases[3])).toBe(12);
    expect(strangeScore(edgeCases[4])).toBe(6);
    expect(strangeScore(edgeCases[5])).toBe(12);
    expect(strangeScore(edgeCases[6])).toBe(6);
  });
});

xdescribe('Verify if the brackets are correct', () => {
  const testCases = [
    ['(()())', true],
    ['(()()', false],
    ['(()()))', false],
    ['(()()))(', false],
    ['(()()))(()', false],
    ['(()()))(()())', false],
    ['(()()))(()()', false],
    ['(()()))(()()))', false],
    ['(()()))(()()))(', false],
    ['()', true],
    ['()()', true],
    ['{[()]}', true],
    ['{[(])}', false],
    ['{[()]', false],
    ['{[()]}{[()]}', true],
    ['{[()]}{[()]', false],
  ];

  test('Should return correct answers', () => {
    testCases.forEach((testCase) => {
      expect(comprobateBrackets(testCase[0])).toBe(testCase[1]);
    });
  });
});

describe('Move N spaces in an array', () => {
  const testCasesClockwise = [
    [1, [1, 2, 3, 4, 5], [5, 1, 2, 3, 4]],
    [2, [1, 2, 3, 4, 5], [4, 5, 1, 2, 3]],
    [3, [1, 2, 3, 4, 5], [3, 4, 5, 1, 2]],
    [4, [1, 2, 3, 4, 5], [2, 3, 4, 5, 1]],
    [5, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
  ];

  const testCasesCounterClockwise = [
    [1, [1, 2, 3, 4, 5], [2, 3, 4, 5, 1]],
    [2, [1, 2, 3, 4, 5], [3, 4, 5, 1, 2]],
    [3, [1, 2, 3, 4, 5], [4, 5, 1, 2, 3]],
    [4, [1, 2, 3, 4, 5], [5, 1, 2, 3, 4]],
    [5, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
  ];

  test('Should return correct answers. This should work with rotate clockwise', () => {
    expect(moveNPositionClockwise(testCasesClockwise[0][0], testCasesClockwise[0][1])).toEqual(
      testCasesClockwise[0][2]
    );
    expect(moveNPositionClockwise(testCasesClockwise[1][0], testCasesClockwise[1][1])).toEqual(
      testCasesClockwise[1][2]
    );
    expect(moveNPositionClockwise(testCasesClockwise[2][0], testCasesClockwise[2][1])).toEqual(
      testCasesClockwise[2][2]
    );
    expect(moveNPositionClockwise(testCasesClockwise[3][0], testCasesClockwise[3][1])).toEqual(
      testCasesClockwise[3][2]
    );
    expect(moveNPositionClockwise(testCasesClockwise[4][0], testCasesClockwise[4][1])).toEqual(
      testCasesClockwise[4][2]
    );
  });

  test('Should return correct answers. This should work with rotate counter clockwise', () => {
    expect(moveNPositionCounterClockwise(testCasesCounterClockwise[0][0], testCasesCounterClockwise[0][1])).toEqual(
      testCasesCounterClockwise[0][2]
    );
    expect(moveNPositionCounterClockwise(testCasesCounterClockwise[1][0], testCasesCounterClockwise[1][1])).toEqual(
      testCasesCounterClockwise[1][2]
    );
    expect(moveNPositionCounterClockwise(testCasesCounterClockwise[2][0], testCasesCounterClockwise[2][1])).toEqual(
      testCasesCounterClockwise[2][2]
    );
    expect(moveNPositionCounterClockwise(testCasesCounterClockwise[3][0], testCasesCounterClockwise[3][1])).toEqual(
      testCasesCounterClockwise[3][2]
    );
    expect(moveNPositionCounterClockwise(testCasesCounterClockwise[4][0], testCasesCounterClockwise[4][1])).toEqual(
      testCasesCounterClockwise[4][2]
    );
  });
});
