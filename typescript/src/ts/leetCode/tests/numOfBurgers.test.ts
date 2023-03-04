import { numOfBurgers } from '../numOfBurgers'

describe('Num of burgers tests', () => {
  describe('When tomatoSlices = 16 and cheeseSlices = 7', () => {
    it('we can make 1 jumbo burger and 6 small burger', () => {
      expect(numOfBurgers(16, 7)).toEqual([1, 6])
    })
  })
})
