//Utilizamos un bucle for para iterar entre los días que
//dure la publicidad, empezando en uno e iterando hasta el día
//de finalización.
//Luego sacamos la mitad de cada cantidad de personas y actualizamos
//Finalmente, solamente queda realizar una suma iterativa para
//contar la cantidad de likes que hay.
//NOTE: Nivel Easy

function strangeAdvertising(days) {
    let people = 5;
    let likes;
    let finalLikes = 0;
    for (let i = 1; i <= n; i++) {
        likes = Math.floor(people / 2);
        people = likes * 3;
        finalLikes += likes;
    }
    return finalLikes;
}

strangeAdvertising(5);
