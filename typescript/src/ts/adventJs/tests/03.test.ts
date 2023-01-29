import { isValid } from '../03'

describe('AdventJS 03', () => {
  describe('The function', () => {
    it('the brackets cannot be empty', () => {
      expect(isValid('(muñeca)')).toBe(true)
      expect(isValid('()')).toBe(false)
    })

    it('inside the brackets cannot be another type of brackets', () => {
      expect(isValid('(muñeca)')).toBe(true)
      expect(isValid('([muñeca)')).toBe(false)
      expect(isValid('([muñeca]')).toBe(false)
      expect(isValid('({muñeca]')).toBe(false)
    })

    it('should work with test cases', () => {
      expect(isValid('bici coche (balón bici coche')).toBeFalsy()
      expect(isValid('peluche (bici [coche) bici coche balón')).toBeFalsy()
      expect(isValid('(peluche {) bici')).toBeFalsy()
      expect(isValid('(a)(b)(c)')).toBeTruthy()
    })
  })
})
