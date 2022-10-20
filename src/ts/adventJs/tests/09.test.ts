import { groupBy } from '../../adventJs/09'

describe('groupBy tests', () => {
  describe('The function', () => {
    it('should return an object with a number as key and an array of strings | objects | numbers as value', () => {
      expect(typeof groupBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Math.floor)).toBe(
        'object'
      )
    })
  })

  describe('The function logic', () => {
    describe('if the second parameter is a funciton', () => {
      it('the keys of the result object must be all the elements of the first parameter the result of the execution of the second parameter passing the first parameter as an argument', () => {
        expect(Object.keys(groupBy([6.1, 4.2, 6.3], Math.floor))).toEqual([
          '4',
          '6',
        ])
        expect(
          Object.keys(
            groupBy([1397639141184, 1363223700000], (timestamp) =>
              new Date(timestamp).getFullYear()
            )
          )
        ).toEqual(['2013', '2014'])
      })

      it('the elements of the first argument must be grouped correctly', () => {
        expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
          [4]: [4.2],
          [6]: [6.1, 6.3],
        })
        expect(
          groupBy([1397639141184, 1363223700000], (timestamp) =>
            new Date(timestamp).getFullYear()
          )
        ).toEqual({ [2013]: [1363223700000], [2014]: [1397639141184] })
      })
    })

    describe('if the second argument is a string', () => {
      describe('and the first parameter is an array of string', () => {
        it('the keys of the result object should be the `item.secondParameter` prop', () => {
          expect(
            Object.keys(groupBy(['one', 'two', 'three'], 'length' as string))
          ).toEqual(['3', '5'])

          expect(
            Object.keys(groupBy([{ age: 23 }, { age: 24 }], 'age'))
          ).toEqual(['23', '24'])
        })

        it('the elements of the first argument must be grouped correctly', () => {
          expect(groupBy([{ age: 23 }, { age: 24 }], 'age')).toEqual({
            [23]: [{ age: 23 }],
            [24]: [{ age: 24 }],
          })
          expect(
            groupBy(
              [
                { title: 'JavaScript: The Good Parts', rating: 8 },
                { title: 'Aprendiendo Git', rating: 10 },
                { title: 'Clean Code', rating: 9 },
              ],
              'rating'
            )
          ).toEqual({
            [8]: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
            [9]: [{ title: 'Clean Code', rating: 9 }],
            [10]: [{ title: 'Aprendiendo Git', rating: 10 }],
          })
        })
      })
    })
  })
})
