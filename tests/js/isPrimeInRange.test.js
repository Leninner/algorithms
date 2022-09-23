import { isPrimeInRange } from '../../code/isPrimeInRange'

describe('isPrimeInRange', () => {
  test('Debe dar buenos resultados', () => {
    expect(isPrimeInRange(2, 20)).toStrictEqual([2, 3, 5, 7, 11, 13, 17, 19])
    expect(isPrimeInRange(2, 10)).toStrictEqual([2, 3, 5, 7])
  })
})
