import { runLength } from '../code/runLength';

xdescribe('Los tests deben ser correctos', () => {
  test('Debe dar buenos resultados', () => {
    expect(runLength('AAAABBBCCDAA')).toBe('4A3B2C1D2A');
    expect(runLength('ABBCcAD')).toBe('1A2B1C1c1A1D');
    expect(runLength('aabbccdd')).toBe('2a2b2c2d');
    expect(runLength('aabbccddeeff')).toBe('2a2b2c2d2e2f');
    expect(runLength('EEERTYUIOOOOPPPPPPAAAAAAEEEE')).toBe('3E1R1T1Y1U1I4O6P6A4E');
  });
});
