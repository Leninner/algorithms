import { isPrime } from '../isPrime'

test('Debe dar soluciones correctas', () => {
  expect(isPrime(2)).toBe(true)
  expect(isPrime(3)).toBe(true)
  expect(isPrime(4)).toBe(false)
  expect(isPrime(21)).toBe(false)
  expect(isPrime(1)).toBe(false)
})
