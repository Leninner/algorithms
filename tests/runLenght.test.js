import { runLength, runLenghtDecode } from '../code/runLength'

describe.skip('Los tests deben ser correctos', () => {
  test('Debe codificar el input', () => {
    expect(runLength('AAAABBBCCDAA')).toBe('4A3B2C1D2A')
    expect(runLength('ABBCcAD')).toBe('1A2B1C1c1A1D')
    expect(runLength('aabbccdd')).toBe('2a2b2c2d')
    expect(runLength('aabbccddeeff')).toBe('2a2b2c2d2e2f')
    expect(runLength('EEERTYUIOOOOPPPPPPAAAAAAEEEE')).toBe(
      '3E1R1T1Y1U1I4O6P6A4E'
    )
  })

  test('Debe decodificar el input', () => {
    expect(runLenghtDecode('4A3B2C1D2A')).toBe('AAAABBBCCDAA')
    expect(runLenghtDecode('1A2B1C1c1A1D')).toBe('ABBCcAD')
    expect(runLenghtDecode('2a2b2c2d')).toBe('aabbccdd')
    expect(runLenghtDecode('2a2b2c2d2e2f')).toBe('aabbccddeeff')
    expect(runLenghtDecode('3E1R1T1Y1U1I4O6P6A4E')).toBe(
      'EEERTYUIOOOOPPPPPPAAAAAAEEEE'
    )
  })
})
