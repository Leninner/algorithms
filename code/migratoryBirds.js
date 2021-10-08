// https://www.hackerrank.com/challenges/migratory-birds/problem

const migratoryBirds = (arr) => {
    let tipos = [1, 2, 3, 4, 5];
    let cantidad = [0, 0, 0, 0, 0];
    for (let i = 0; i < arr.length; i++) {
        switch (true) {
            case arr[i] == tipos[0]:
                cantidad[0]++;
                break;
            case arr[i] == tipos[1]:
                cantidad[1]++;
                break;
            case arr[i] == tipos[2]:
                cantidad[2]++;
                break;
            case arr[i] == tipos[3]:
                cantidad[3]++;
                break;
            case arr[i] == tipos[4]:
                cantidad[4]++;
                break;
        }
    }
    let mayor = cantidad[0];
    for (let i = 0; i < cantidad.length; i++) {
        if (cantidad[i] > mayor) {
            mayor = cantidad[i];
        }
    }
    for (let i = 0; i < cantidad.length; i++) {
        if (mayor == cantidad[i]) {
            console.log(i + 1);
            break;
        }
    }
};

const pruebaA = migratoryBirds([2, 3, 3, 1, 2]); // => 2
const pruebaB = migratoryBirds([1, 4, 4, 4, 5, 3]); // => 4
const pruebaC = migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4, 1]); // => 1
