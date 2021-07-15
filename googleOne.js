// Este es un juego de fiestas:
// Tienes un número de personas A y un mensaje codificado
// Cada persona tiene un número indicando la posición de la siguiente persona
// a la que va a mandarle el mensaje
// La primera persona toma la primera letra del mensaje y la pasa a la siguiente,
// la siguiente persona recibe el string y le adjunta la siguiente letra
// de acuerdo a la posición del jugador anterior,
// vuelve a mandar el mensaje a la siguiente posición
// hasta que todos adjuntaron la letra de su posición

// Ejemplo 1: A = [3, 2, 0, 1] y S = "cdeo"
//     R = "code"

//Ejemplo 2: A = [5, 2, 0, 1, 6, 4, 8, 3, 7] y S = "cdeenetpi"
//     R = "centipede"

// @param A arreglo de personas
// @param S mensaje codificado

function decodificar(A, S) {
    let i = A[0],
        finalString = S[0];

    while (finalString.length < A.length) {
        finalString += S[i];
        i = A[i];
    }
    console.log(finalString);
}

decodificar([3, 2, 0, 1], "cdeo"); // code
decodificar([5, 2, 0, 1, 6, 4, 8, 3, 7], "cdeenetpi"); // centipede
