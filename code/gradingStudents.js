function gradingStudents(grades) {
    let array = [];
    let aux = [];
    let finalArray = [];
    for (let i = 0; i < grades.length; i++) {
        aux.push(grades[i]);
        if (grades[i] < 38) {
            array.push(grades[i]);
        } else if (grades[i] % 5 !== 0) {
            while (grades[i] % 5 != 0) {
                grades[i]++;
            }
            array.push(grades[i]);
        } else {
            array.push(grades[i]);
        }
    }
    for (let i = 0; i < aux.length; i++) {
        if (aux[i] < 38) {
            finalArray.push(aux[i]);
        } else if (array[i] - aux[i] < 3) {
            finalArray.push(array[i]);
        } else if (array[i] - aux[i] >= 3) {
            finalArray.push(aux[i]);
        }
    }
    return finalArray;
}
gradingStudents([73, 67, 38, 33]);
