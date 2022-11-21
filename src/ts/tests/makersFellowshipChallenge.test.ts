import {
  arrayChallenge,
  arrayChallengeTwo,
  mathChallenge,
} from '../makersFellowshipChallenge'

describe('Makers Fellowship Challenge', () => {
  describe('When the mathChallenge function is called', () => {
    it('should count how many times a number is less by one the previous number', () => {
      const result = mathChallenge('5655984')
      expect(result).toBe(2)
    })
  })

  describe('When the arrayChallenge function is called', () => {
    it('should return all the pairs of numbers that sum the first element', () => {
      const input = [7, 3, 5, 2, -4, 8, 11]
      const result = arrayChallenge(input)

      expect(result).toBe('5,2 -4,11')
    })

    it("should work with the challenge's example", () => {
      const input = [17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7]
      const result = arrayChallenge(input)

      expect(result).toBe('6,11 10,7 15,2')
    })
  })

  describe('When the arrayChallengeTwo function is called', () => {
    it('should analyze the period of the day that gives you the most free time', () => {
      const input = ['10:00AM-12:30PM', '02:00PM-02:45PM', '09:10AM-09:50AM']
      const result = arrayChallengeTwo(input)

      expect(result).toBe('01:30')
    })

    it("should work with the challenge's example", () => {
      const input = ['12:15PM-02:00PM', '09:00AM-12:11PM', '02:02PM-04:00PM']
      const inputTwo = ['12:15PM-02:00PM', '09:00AM-10:00AM', '10:30AM-12:00PM']
      const result = arrayChallengeTwo(input)
      const resultTwo = arrayChallengeTwo(inputTwo)

      expect(result).toBe('00:04')
      expect(resultTwo).toBe('00:30')
    })
  })
})
