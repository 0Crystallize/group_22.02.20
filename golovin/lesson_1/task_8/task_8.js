"use strict";

let num = 0;

while (num <= 100) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }

    if (count === 2) {
        console.log(num);
    }

    num++;
}
