import { strangeScore, comprobateBrackets } from '../code/turingChallenges.js';

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

describe('Verify if the brackets are correct', () => {
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
  ];

  test('Should return correct answers', () => {
    expect(comprobateBrackets(testCases[0][0])).toBe(testCases[0][1]);
    expect(comprobateBrackets(testCases[1][0])).toBe(testCases[1][1]);
    expect(comprobateBrackets(testCases[2][0])).toBe(testCases[2][1]);
    expect(comprobateBrackets(testCases[3][0])).toBe(testCases[3][1]);
    expect(comprobateBrackets(testCases[4][0])).toBe(testCases[4][1]);
    expect(comprobateBrackets(testCases[5][0])).toBe(testCases[5][1]);
    expect(comprobateBrackets(testCases[6][0])).toBe(testCases[6][1]);
    expect(comprobateBrackets(testCases[7][0])).toBe(testCases[7][1]);
    expect(comprobateBrackets(testCases[8][0])).toBe(testCases[8][1]);
  });
});
