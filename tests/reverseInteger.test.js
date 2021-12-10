import { reverse } from '../code/reverseInteger';

xtest('Si el número es menor a 2**23 debe retornar un número revertido', () => {
  expect(reverse(-789)).toBe(-987);
  expect(reverse(4512)).toBe(2154);
  expect(reverse(0)).toBe(0);
});

xtest('Si el número es mayor a 2**23 debe retornar 0', () => {
  expect(reverse(6465123132332)).toBe(0);
  expect(reverse(123154132123)).toBe(0);
});
