import { fixFiles } from '../../adventJs/18'

describe('fixFiles tests', () => {
  describe('The function', () => {
    it('should return an array of strings', () => {
      const files = ['photo', 'postcard', 'photo', 'photo', 'video']
      const result = fixFiles(files)
      expect(result).toBeInstanceOf(Array)
    })
  })

  describe('The function logic', () => {
    it('should comprobate the number of duplicated files and return the number belong the name in the array', () => {
      const files = ['photo', 'postcard', 'photo', 'photo', 'video']

      const result = fixFiles(files)
      expect(result).toEqual([
        'photo',
        'postcard',
        'photo(1)',
        'photo(2)',
        'video',
      ])
    })

    it('should work when the files already have the suffix in the name', () => {
      const filesWithSuffix = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']

      const result = fixFiles(filesWithSuffix)
      expect(result).toEqual([
        'file',
        'file(1)',
        'icon',
        'icon(1)',
        'icon(1)(1)',
      ])
    })

    it('should work with the challenge example', () => {
      const files = ['file', 'file', 'file', 'game', 'game']

      const result = fixFiles(files)
      expect(result).toEqual(['file', 'file(1)', 'file(2)', 'game', 'game(1)'])
    })
  })
})
