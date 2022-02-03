import { strangeScore } from '../code/turingChallenges.js';

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
