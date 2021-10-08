function kangaroo(x1, v1, x2, v2) {
    if (v1 - v2 == 0) {
        console.log("NO");
    } else {
        let cantSaltos = (x2 - x1) / (v1 - v2);
        let posCanOne = x1;
        let posCanTwo = x2;
        for (let i = 0; i < cantSaltos; i++) {
            posCanOne += v1;
            posCanTwo += v2;
        }
        if (posCanOne === posCanTwo) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }
}

kangaroo(43, 2, 70, 2);
