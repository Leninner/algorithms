import { utopianTree } from '../code/utopianTree'

test.skip('should be correct', () => {
  expect(utopianTree(0)).toBe(1)
  expect(utopianTree(1)).toBe(2)
  expect(utopianTree(2)).toBe(3)
  expect(utopianTree(7)).toBe(30)
  expect(utopianTree(4)).toBe(7)
})
