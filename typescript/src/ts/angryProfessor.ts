// https://www.hackerrank.com/challenges/angry-professor/problem
// k = mínima de estudiantes
// a = array con tiempo de entrada de cada estudiante

export const angryProfessor = (k: number, a: number[]) =>
  a.filter((e) => e <= 0).length >= k ? 'NO' : 'YES'
