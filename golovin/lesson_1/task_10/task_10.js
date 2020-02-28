"use strict";

let num = 9;
let pow = 3;
let result = null;

function power(val, pow) {
    if (pow === 0) {
        result = 1;
        return;
    }

    if (pow === 1) {
        result = val;
        return;
    }

    power(val * num, pow - 1);
}

power(num, pow);

console.log(`${num}^${pow} = ${result}`);
