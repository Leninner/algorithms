import { angryProfessor } from '../angryProfessor'

test('El código debe funcionar correctamente', () => {
  expect(angryProfessor(2, [0, -1, 2, 1])).toBe('NO')
  expect(angryProfessor(4, [0, -1, 2, 1])).toBe('YES')
  expect(angryProfessor(3, [-1, -3, 4, 2])).toBe('YES')
})
