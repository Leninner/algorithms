const birthday = (s, d, m) => {
  let suma = 0;
  let contadorBarras = 0;
  for (let i = 0; i < s.length - (m - 1); i++) {
    suma = 0;
    for (let y = i; y < m + i; y++) {
      suma += s[y];
    }
    if (suma == d) {
      contadorBarras++;
    }
  }

  return contadorBarras;
};

export { birthday };
