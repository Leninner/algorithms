function birthday(s, d, m) {
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
    console.log(contadorBarras);
    return contadorBarras;
}

birthday([1, 2, 1, 3, 2], 3, 2); //2
birthday([1, 1, 1, 1, 1, 1], 3, 2); //0
birthday([2, 2, 1, 3, 2], 4, 2); //2
birthday([4, 1], 4, 1); //1
birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7); //3
