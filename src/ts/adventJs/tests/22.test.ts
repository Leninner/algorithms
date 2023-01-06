import { countDecorations } from '../22'

describe('countDecorations tests', () => {
  const firstTree = {
    value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
    left: {
      value: 2, // el nodo izquierdo necesita dos decoraciones
      left: null, // no tiene más ramas
      right: null, // no tiene más ramas
    },
    right: {
      value: 3, // el nodo de la derecha necesita tres decoraciones
      left: null, // no tiene más ramas
      right: null, // no tiene más ramas
    },
  }

  const secondTree = {
    value: 1,
    left: {
      value: 5,
      left: {
        value: 7,
        left: {
          value: 3,
          left: null,
          right: null,
        },
        right: null,
      },
      right: null,
    },
    right: {
      value: 6,
      left: {
        value: 5,
        left: null,
        right: null,
      },
      right: {
        value: 1,
        left: null,
        right: null,
      },
    },
  }

  it('should return a number', () => {
    expect(typeof countDecorations(firstTree)).toBe('number')
  })

  it('should return 6 when the first case is passed', () => {
    expect(countDecorations(firstTree)).toBe(6)
  })

  it('should return 28 when the second case is passed', () => {
    expect(countDecorations(secondTree)).toBe(28)
  })
})
