import { strangeAdvertising } from '../viralAdvertising'

test('Debería devolver un resultado correcto', () => {
  expect(strangeAdvertising(5)).toBe(24)
})
