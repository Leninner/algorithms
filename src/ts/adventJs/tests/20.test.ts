import { pangram } from '../../adventJs/20'

describe('pangram tests', () => {
  describe('The function', () => {
    it('should be defined', () => {
      expect(pangram).toBeDefined()
    })

    it('should return a boolean', () => {
      expect(typeof pangram('')).toBe('boolean')
    })
  })

  describe('The function logic', () => {
    const validLetters = [
      'Extraño pan de col y kiwi se quemó bajo fugaz vaho',
      'Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!',
    ]

    const invalidLetters = [
      'Esto es una frase larga pero no tiene todas las letras del abecedario',
      'De la a a la z, nos faltan letras',
    ]

    const specialLetters = [
      'Extraño pan de col y kiwí se quemó bajo fugaz vaho',
    ]

    it('should comprobate that the string is only letters', () => {
      expect(pangram('123')).toBeFalsy()
    })

    it.each(validLetters)(
      'should return true if the "%s" contains all the letters of the alphabet',
      (letter) => {
        expect(pangram(letter)).toBeTruthy()
      }
    )

    it.each(invalidLetters)(
      'should return false if the "%s" does not contain all the letters of the alphabet',
      (letter) => {
        expect(pangram(letter)).toBeFalsy()
      }
    )

    it.each(specialLetters)(
      'should return true if the "%s" special letter contains all the letters of the alphabet',
      (letter) => {
        expect(pangram(letter)).toBeTruthy()
      }
    )
  })
})
