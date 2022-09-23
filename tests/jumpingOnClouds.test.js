import jumpingOnClouds from '../code/jumpingOnClouds'

test.skip('Debe dar un resultado correcto', () => {
  expect(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)).toBe(92)
  expect(jumpingOnClouds([0, 0, 0, 0, 1, 0], 3)).toBe(98)
  expect(jumpingOnClouds([0, 0, 1, 0], 2)).toBe(96)
  expect(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3)).toBe(80)
})
