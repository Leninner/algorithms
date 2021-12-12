import { fibonacciInArray } from '../code/fibonacci.js';

describe('Serie de fibanacci', () => {
  test('Debe funcionar', () => {
    expect(fibonacciInArray(1)).toStrictEqual([1]);
    expect(fibonacciInArray(2)).toStrictEqual([1, 1]);
    expect(fibonacciInArray(3)).toStrictEqual([1, 1, 2]);
    expect(fibonacciInArray(4)).toStrictEqual([1, 1, 2, 3]);
  });
});
