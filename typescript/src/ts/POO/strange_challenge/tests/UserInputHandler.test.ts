import { UserInputHandler } from '../src/UserInputHandler'

describe('UserInputHandler tests', () => {
  describe('When the readWeekDay method is called', () => {
    it("should accept 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado' or 'domingo' as input", () => {
      expect(() => new UserInputHandler().readWeekDay('Lunes')).not.toThrow()
      expect(() => new UserInputHandler().readWeekDay('Martes')).not.toThrow()
      expect(() =>
        new UserInputHandler().readWeekDay('Miércoles')
      ).not.toThrow()
      expect(() => new UserInputHandler().readWeekDay('Jueves')).not.toThrow()
      expect(() => new UserInputHandler().readWeekDay('Viernes')).not.toThrow()
    })
  })

  describe('When the generateFibonacciSequence is called', () => {
    it('should generate a fibonacci sequence with the length of the week day', () => {
      const userInputHandler = new UserInputHandler()
      userInputHandler.readWeekDay('Lunes')
      userInputHandler.generateFibonacciSequence()
      expect(userInputHandler.fibonacciSequence).toEqual([1, 1, 2, 3, 5])
    })
  })
})
