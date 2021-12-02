import sumOfTwo from '../code/sumOfTwo';

test('Debe dar resultados correctos', () => {
  expect(sumOfTwo([1, 2, 3], 4)).toEqual(true);
  expect(sumOfTwo([1, 2, 3], 5)).toEqual(true);
  expect(sumOfTwo([, 1, 1, 1, 1, 1, 1, 4, 5, 4, 5, 4, 5], 78)).toEqual(false);
  expect(sumOfTwo([10, 15, 3, 7], 17)).toEqual(true);
});
