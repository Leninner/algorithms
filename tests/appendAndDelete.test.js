import { appendAndDelete } from '../code/appendAndDelete'

describe('appendAndDelete', () => {
  test('Debe dar resultados correctos', () => {
    expect(appendAndDelete('hackerhappy', 'hackerrank', 9)).toBe('Yes')
    expect(appendAndDelete('aba', 'aba', 7)).toBe('Yes')
    expect(appendAndDelete('ashley', 'ash', 2)).toBe('No')
  })
})
