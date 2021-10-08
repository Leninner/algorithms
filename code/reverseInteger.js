// https://leetcode.com/problems/reverse-integer/

// x = Integer al que tenemos que darle la vuelta

/*
 *
 * @param {number} x
 * @return {number}
 */

let reverse = function (x) {
    let juas = x.toString().split("").reverse().join("");
    if (2147483647 < parseInt(juas) || -2147483648 > parseInt(juas)) {
        //Si el número en reversa supera el límite de 32 bits en integers, entonces retornar 0
        return 0;
    } else {
        if (x < 0) {
            return parseInt(juas) - parseInt(juas) * 2;
        } else {
            return parseInt(juas);
        }
    }
};

reverse(-120); // -21
reverse(7894); // 4987
reverse(544561564054531231); // 0
reverse(78454564654); // 0

// Otra solución similar, con menos uso en memoria y 5 ms más.

var reverse = function (x) {
    if (
        parseInt(x.toString().split("").reverse().join("")) > 2 ** 31 ||
        parseInt(x.toString().split("").reverse().join("")) < (-2) ** 31
    ) {
        return 0;
    } else if (x < 0) {
        return (
            parseInt(x.toString().split("").reverse().join("")) -
            parseInt(x.toString().split("").reverse().join("")) * 2
        );
    } else {
        return parseInt(x.toString().split("").reverse().join(""));
    }
};

console.log(reverse(45));
console.log(reverse(0));
console.log(reverse(67984321354654));
console.log(reverse(-123));
