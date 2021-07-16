// Encontrar el número de letras encontradas utilizando expresiones regulares

function getCount(str) {
    let vowelsCount = 0;

    let cadena = str;
    let expresion = /[a,e,i,o,u]/gi;
    let array_emparejamientos = cadena.match(expresion);

    if (!array_emparejamientos) {
        return 0;
    } else {
        vowelsCount = array_emparejamientos.length;
        return vowelsCount;
    }
}

console.log(getCount("my pyx")); // 0
