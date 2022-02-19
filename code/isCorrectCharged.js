// https://www.hackerrank.com/challenges/library-fine/problem?isFullScreen=true

const libraryFine = (d1, m1, y1, d2, m2, y2) => {
  let fine = 0;

  if (y1 > y2) {
    fine = 10000;
  } else if (m1 > m2 && y1 === y2) {
    fine = 500 * (m1 - m2);
  } else if (m2 === m1 && y2 === y1 && d1 > d2) {
    fine = 15 * (d1 - d2);
  }

  return fine;
};

console.log(libraryFine(2, 7, 1014, 1, 1, 1015));
