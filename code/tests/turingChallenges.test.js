import {
  strangeScore,
  comprobateBrackets,
  moveNPositionClockwise,
  moveNPositionCounterClockwise,
} from '../turingChallenges.js'

describe('Strange counter in basketball', () => {
  const testCases = [
    ['5', '2', 'C', 'D', '+'],
    ['1', '2', '+', 'D'],
    ['6', '78', '+', '2', 'C', 'D'],
    ['1', '8', '+', '3', '-8', 'C', 'D'],
  ]

  const edgeCases = [
    [['1', '2', '+', 'D', 'C'], 6],
    [['1', '2', '+', 'D', 'C', 'D'], 12],
    [['1', '2', '+', 'D', 'C', 'D', 'C'], 6],
    [['1', '2', '+', 'D', 'C', 'D', 'C', 'D'], 12],
    [['1', '2', '+', 'D', 'C', 'D', 'C', 'D', 'C'], 6],
    [['1', '2', '+', 'D', 'C', 'D', 'C', 'D', 'C', 'D'], 12],
    [['1', '2', '+', 'D', 'C', 'D', 'C', 'D', 'C', 'D', 'C'], 6],
  ]

  test('Should return correct answers', () => {
    expect(strangeScore(testCases[0])).toBe(30)
    expect(strangeScore(testCases[1])).toBe(12)
    expect(strangeScore(testCases[2])).toBe(336)
    expect(strangeScore(testCases[3])).toBe(27)
  })

  test('Should return correct answers with edge cases', () => {
    edgeCases.forEach(([ops, result]) => {
      expect(strangeScore(ops)).toBe(result)
    })
  })
})

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
    ['{[()]}{[()]', false],
  ]

  test('Should return correct answers', () => {
    testCases.forEach(([str, result]) => {
      expect(comprobateBrackets(str)).toBe(result)
    })
  })
})

describe('Move N spaces in an array', () => {
  const testCasesClockwise = [
    [1, [1, 2, 3, 4, 5], [5, 1, 2, 3, 4]],
    [2, [1, 2, 3, 4, 5], [4, 5, 1, 2, 3]],
    [3, [1, 2, 3, 4, 5], [3, 4, 5, 1, 2]],
    [4, [1, 2, 3, 4, 5], [2, 3, 4, 5, 1]],
    [5, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
  ]

  const testCasesCounterClockwise = [
    [1, [1, 2, 3, 4, 5], [2, 3, 4, 5, 1]],
    [2, [1, 2, 3, 4, 5], [3, 4, 5, 1, 2]],
    [3, [1, 2, 3, 4, 5], [4, 5, 1, 2, 3]],
    [4, [1, 2, 3, 4, 5], [5, 1, 2, 3, 4]],
    [5, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
  ]

  test('Should return correct answers. This should work with rotate clockwise', () => {
    testCasesClockwise.forEach(([number, input, output]) => {
      expect(moveNPositionClockwise(number, input)).toEqual(output)
    })
  })

  test('Should return correct answers. This should work with rotate counter clockwise', () => {
    testCasesCounterClockwise.forEach(([number, input, output]) => {
      expect(moveNPositionCounterClockwise(number, input)).toEqual(output)
    })
  })
})
