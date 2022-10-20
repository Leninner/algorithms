import { canCarry } from '../21'

describe('canCarry', () => {
  describe('The function', () => {
    it('should be defined', () => {
      expect(canCarry).toBeDefined()
    })

    it('should return a boolean', () => {
      expect(typeof canCarry(1, [[1, 2, 3]])).toBe('boolean')
    })
  })

  describe('The function logic', () => {
    it('should return false if the pick up points does not make sense and not have the asc order and true if does', () => {
      const capacity = 4
      const incorrectTrips = [
        [2, 5, 8],
        [3, 4, 10],
      ]
      const correctTrips = [
        [2, 5, 8],
        [2, 6, 10],
      ]

      expect(canCarry(capacity, incorrectTrips)).toBeFalsy()
      expect(canCarry(capacity, correctTrips)).toBeTruthy()
    })

    it('should return false if the capacity of the sled is exceeded', () => {
      const capacity = 4
      const trips = [
        [2, 5, 8],
        [3, 6, 10],
      ]

      expect(canCarry(capacity, trips)).toBeFalsy()
    })

    it('should return true if the capacity of the sled is in the limits', () => {
      expect(
        canCarry(3, [
          [1, 1, 5],
          [2, 2, 10],
        ])
      ).toBeTruthy()
    })

    it('should work when the trips are more than 2', () => {
      expect(
        canCarry(3, [
          [1, 1, 5],
          [2, 2, 10],
          [1, 3, 15],
        ])
      ).toBeFalsy()
    })

    it('should work with the challenge tests', () => {
      expect(
        canCarry(3, [
          [2, 1, 5],
          [3, 5, 7],
        ])
      ).toBeTruthy()
      expect(
        canCarry(4, [
          [2, 3, 8],
          [2, 5, 7],
        ])
      ).toBeTruthy()
      expect(canCarry(1, [[2, 3, 8]])).toBeFalsy()
      expect(
        canCarry(2, [
          [1, 2, 4],
          [2, 3, 8],
        ])
      ).toBeFalsy()
    })
  })
})
