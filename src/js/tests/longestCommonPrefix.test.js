import { longestCommonPrefix } from '../longestCommonPrefix'

test('Debe dar resultados correctos', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
  expect(longestCommonPrefix(['', 'b'])).toBe('')
})
