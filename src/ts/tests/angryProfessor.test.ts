import { angryProfessor } from '../angryProfessor'

describe('El código debe funcionar correctamente', () => {
  it('should work', () => {
    expect(angryProfessor(2, [0, -1, 2, 1])).toBe('NO')
    expect(angryProfessor(4, [0, -1, 2, 1])).toBe('YES')
    expect(angryProfessor(3, [-1, -3, 4, 2])).toBe('YES')
  })
})
