"use strict"

let a = 10;
let b = 7;

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else if (a * b < 0) {
    console.log(a + b);
}
