"use strict";

let num = 0;

do {
    if (num === 0) {
        console.log(`${num} - это ноль`);
    } else if (num % 2 === 0) {
        console.log(`${num} - четное число`);
    } else {
        console.log(`${num} - нечетное число`);
    }

    num++;
} while (num <= 10);
