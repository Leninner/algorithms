function countingValleys(steps, path) {
    let array = path.split("");
    let pos = 0;
    let valley = 0;
    for (let i = 0; i < steps; i++) {
        if (array[i] == "U") pos++;
        if (array[i] == "D") pos--;
        if (pos == 0 && array[i] == "U") valley++;
        //Si la posición vuelve a ser cero y la posición actual de los pasos es U, entonces
        //hago un conteo de valles
    }
    console.log(valley);
}

countingValleys(8, "UDDDUDUU");
