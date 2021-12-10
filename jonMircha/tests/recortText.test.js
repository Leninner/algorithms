import { recortText } from '../code/recortText';

xdescribe('recortText', () => {
  test('La función tiene que retornar una porción de la cadena al pasarle un número', () => {
    expect(recortText('Hola mundo', 4)).toBe('Hola');
    expect(recortText('Leninner', 2)).toBe('Le');
    expect(recortText('Hola Mundo', 5)).toBe('Hola ');
    expect(recortText('Hola Mundo', 0)).toBe('');
  });

  test('Si recibo número negativos, retornar ese número', () => {
    expect(recortText('Hola mundo', -9)).toBe(false);
    expect(recortText('Leninner', -2)).toBe(false);
  });

  test('Si recibo tipos de dato diferentes, retornar falso', () => {
    expect(recortText([1, 2, 3, 4], 2)).toBe(false);
    expect(recortText(true, [])).toBe(false);
    expect(recortText('Yes', [])).toBe(false);
    expect(recortText('Yes', true)).toBe(false);
  });
});
