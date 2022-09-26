import { countingTheDaysBeforeChristmas } from '../../adventJs/05'

describe('Counting the days before Christmas tests', () => {
  describe('The function', () => {
    it('should be defined', () => {
      expect(countingTheDaysBeforeChristmas).toBeDefined()
    })

    it('should acept an instance of a Date', () => {
      const date = new Date()
      expect(countingTheDaysBeforeChristmas(date)).toBeTruthy()
    })

    it('should return a int value', () => {
      const date = new Date()
      expect(typeof countingTheDaysBeforeChristmas(date)).toBe('number')
    })
  })

  describe("The function's logic", () => {
    it('should return 0 if the date is Christmas', () => {
      const date = new Date('Dec 25, 2021')
      expect(countingTheDaysBeforeChristmas(date)).toBe(0)
    })

    it("if the date isn't Christmas, it should return the number of days before Christmas", () => {
      expect(
        countingTheDaysBeforeChristmas(new Date('December 24, 2021 03:24:00'))
      ).toBe(1)
      expect(countingTheDaysBeforeChristmas(new Date('Dec 10, 2021'))).toBe(15)
      expect(countingTheDaysBeforeChristmas(new Date('Nov 1, 2021'))).toBe(54)
      expect(countingTheDaysBeforeChristmas(new Date('Jan 1, 2021'))).toBe(358)
    })

    it('if the date is after Christmas, it should return the number of days before Christmas of the next year', () => {
      expect(countingTheDaysBeforeChristmas(new Date('Dec 26, 2021'))).toBe(-1)
      expect(countingTheDaysBeforeChristmas(new Date('Dec 31, 2021'))).toBe(-6)
      expect(
        countingTheDaysBeforeChristmas(new Date('Jan 1, 2022 23:59:59'))
      ).toBe(-7)
      expect(
        countingTheDaysBeforeChristmas(new Date('Jan 1, 2022 00:00:01'))
      ).toBe(-7)
      expect(countingTheDaysBeforeChristmas(new Date('Dec 26, 2021'))).toBe(-1)
    })
  })
})
