import camelcase from '../../code/CamelCaseRefactored'

test('Debe dar resultados correctos', () => {
  expect(camelcase('saveChangesInTheEditor')).toBe(5)
  expect(camelcase('camelCase')).toBe(2)
  expect(camelcase('leninWithinLoveIsMoreIntuitiveThanYouThink')).toBe(9)
})
