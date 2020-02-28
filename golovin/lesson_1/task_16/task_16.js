"use strict";

function canWinNim(n) {
    if (n % 4 === 0) {
        return false;
    } else {
        return true;
    }
}

let rocks = 8;
const result = canWinNim(rocks);
console.log(result);