// p = array de números
// REVIEW: los valores de Y para todos X en la secuencia aritmética 1 a n

function sequenceEquation(p) {
    let x = 1;
    let posX = [];
    let posY = [];
    //Este WHILE lo utilizamos para encontrar las posiciones de cada X, en el arreglo principal P.
    while (x <= p.length) {
        for (let i = 0; i < p.length; i++) {
            if (p[i] == x) {
                //NOTE: Sumanos porque queremos las posiciones contando desde 1, en vez de 0
                posX.push(i + 1);
            }
        }
        x++;
    }

    //Este FOR, lo utilizamos para encontrar cada posición del nuevo arreglo POSX en el arreglo principal
    for (let i = 0; i < p.length; i++) {
        for (let y = 0; y < p.length; y++) {
            if (p[y] == posX[i]) {
                //NOTE: Sumanos porque queremos las posiciones contando desde 1, en vez de 0
                posY.push(y + 1);
            }
        }
    }
    return posY;
}

sequenceEquation([4, 3, 5, 1, 2]);
