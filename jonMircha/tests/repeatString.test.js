import { repeatString } from '../code/repeatString';

xtest('Debe repetir x veces una cadena', () => {
  expect(repeatString('Hola mundo', 3)).toBe('Hola mundo Hola mundo Hola mundo');
  expect(repeatString('ala', 5)).toBe('ala ala ala ala ala');
});

xtest('No debe aceptar otro tipo de datos', () => {
  expect(repeatString('cool', true)).toBe(false);
});
