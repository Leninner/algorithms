import { moveNTimes } from '../moveNTimes.js'

describe('Función para mover N veces una letra', () => {
  test('Debe dar resultados correctos', () => {
    expect(moveNTimes('a', 4)).toBe('e')
    expect(moveNTimes('a', 0)).toBe('a')
    expect(moveNTimes('a', -1)).toBe('z')
    expect(moveNTimes('a', -2)).toBe('y')
    expect(moveNTimes('a', -3)).toBe('x')
    expect(moveNTimes('a', -4)).toBe('w')
    expect(moveNTimes('a', -5)).toBe('v')
    expect(moveNTimes('a', -6)).toBe('u')
    expect(moveNTimes('z', 1)).toBe('a')
    expect(moveNTimes('z', 2)).toBe('b')
  })
})
