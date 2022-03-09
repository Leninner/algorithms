const strangeSerie = (a: number, b: number, n: number) => {
  let aux: number = 0;

  for (let i = 1; i <= n; i++) {
    aux = 0;

    for (let j = 0; j < i; j++) {
      aux += 2 ** j * b;
    }

    console.log(a + aux);
  }
};

strangeSerie(0, 2, 10); // 2 6 14 30 62 126 254 510 1022 2046
strangeSerie(1, 2, 10); // 3 7 15 31 63 127 255 511 1023 2047
strangeSerie(1, 3, 10); // 4 8 16 32 64 128 256 512 1024 2048 4096
strangeSerie(5, 3, 5); // 15 21 29
