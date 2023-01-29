import { countPackages } from '../../adventJs/17'

describe('countPackages tests', () => {
  describe('The function', () => {
    const carriers = [
      ['dapelu', 5, ['midu', 'jelowing']],
      ['midu', 2, []],
      ['jelowing', 2, []],
    ]

    it('should return a number', () => {
      expect(typeof countPackages(carriers, 'dapelu')).toBe('number')
    })
  })

  describe('The function logic', () => {
    describe('When receives a carrierID', () => {
      it('that doesn`t exist should return 0', () => {
        const carriers = [
          ['dapelu', 5, ['midu', 'jelowing']],
          ['midu', 2, []],
          ['jelowing', 2, []],
        ]

        expect(countPackages(carriers, 'pepito')).toBe(0)
      })

      describe('that exists', () => {
        it('must return the accumulated packages including the accumulated of the subordinates', () => {
          const carriers = [
            ['dapelu', 5, ['midu', 'jelowing']],
            ['midu', 2, []],
            ['jelowing', 2, []],
          ]

          expect(countPackages(carriers, 'dapelu')).toBe(9)
        })

        it('must work more than 1 level deep', () => {
          const carriers = [
            ['lolivier', 8, ['camila', 'jesuspoleo']],
            ['camila', 5, ['sergiomartinez', 'conchaasensio']],
            ['jesuspoleo', 4, []],
            ['sergiomartinez', 4, []],
            ['conchaasensio', 3, ['facundocapua', 'faviola']],
            ['facundocapua', 2, []],
            ['faviola', 1, []],
          ]

          expect(countPackages(carriers, 'camila')).toBe(15)
        })
      })
    })
  })
})
