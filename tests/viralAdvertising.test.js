import { strangeAdvertising } from '../code/viralAdvertising'

test.skip('Debería devolver un resultado correcto', () => {
  expect(strangeAdvertising(5)).toBe(24)
})
