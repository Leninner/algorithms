// https://www.hackerrank.com/challenges/drawing-book/problem

//n = número de páginas del libro
// p = página a encontrar
// Return => La cantidad mínima de giros de página para encontrar P
// Par = Lado izquierdo
// Impar = Lado derecho

function pageCount(n, p) {
  let giroPaginas = 0;
  // p OR q
  if (p == n || p == 1) {
    console.log(0);
  } else {
    // p OR (q AND r)
    if (n - p < p - 1 || (n - p == p - 1 && n % 2 != 0)) {
      // Si llego más rápido por atrás entonces
      for (let i = n; i >= p; i--) {
        if (i == n) {
          continue;
        }
        if (i % 2 != 0) {
          giroPaginas++;
        }
      }
    } else {
      for (let i = 1; i <= p; i++) {
        if (i % 2 == 0) {
          giroPaginas++;
        }
      }
    }
  }
  console.log(giroPaginas);
}

pageCount(5, 3); //1
pageCount(6, 2); //1
pageCount(5, 4); //0
pageCount(10, 5); //2
pageCount(13, 3); // 1
pageCount(50, 1); //0
pageCount(50, 29); //11
pageCount(50, 50); //0
pageCount(51, 50); //0
pageCount(10, 9); //1
pageCount(11, 10); //0
pageCount(7, 4); //1
