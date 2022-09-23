import { stringToArray } from '../code/stringToArray'

test.skip('La función tiene que devolver un arreglo de la cadena separada por un separador', () => {
  expect(stringToArray('Hola, mi nombre es Lenin', ' ')).toStrictEqual([
    'Hola,',
    'mi',
    'nombre',
    'es',
    'Lenin',
  ])
  expect(stringToArray('Hola, mi nombre es Lenin', ',')).toStrictEqual([
    'Hola',
    ' mi nombre es Lenin',
  ])
})

test.skip('Si la función recibe argumentos erroneos devovler falso', () => {
  expect(stringToArray(78, 5)).toBe(false)
})
