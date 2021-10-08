// https://www.hackerrank.com/challenges/angry-professor/problem
// k = mínima de estudiantes
// a = array con tiempo de entrada de cada estudiante

function angryProfessor(k, a) {
    // Write your code here
    if (a.filter((item) => item <= 0).length < k) {
        return "YES";
    } else {
        return "NO";
    }
}

angryProfessor(3, [-2, -1, 0, 1, 2]); //NO
angryProfessor(3, [-1, -3, 4, 2]); //YES
angryProfessor(2, [0, -1, 2, 1]); //NO
