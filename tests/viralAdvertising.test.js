import { strangeAdvertising } from '../code/viralAdvertising';

xtest('Debería devolver un resultado correcto', () => {
  expect(strangeAdvertising(5)).toBe(24);
});
