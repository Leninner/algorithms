import pickingNumbers from '../code/pickingNumbers';

xtest('Debe entregar un resultado acertado', () => {
  expect(pickingNumbers([4, 6, 5, 3, 3, 1])).toBe(3);
  expect(pickingNumbers([1, 2, 2, 3, 1, 2])).toBe(5);
  expect(pickingNumbers([1, 1, 3, 3, 4, 4, 5, 5, 5])).toBe(5);
});
