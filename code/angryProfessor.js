// https://www.hackerrank.com/challenges/angry-professor/problem
// k = mínima de estudiantes
// a = array con tiempo de entrada de cada estudiante

const angryProfessor = (k, a) => {
  // Write your code here
  if (a.filter((item) => item <= 0).length < k) {
    return 'YES';
  } else {
    return 'NO';
  }
};

export { angryProfessor };
