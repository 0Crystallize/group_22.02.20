"use strict";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let a = getRandomIntInclusive(0, 15);

/** Не знаю, зачем здесь switch, когда можно сделать циклом,
 * но если не писать после операций в каждом case оператор break,
 * то можно хорошо поиздеваться над программой :)
 *
 * P.S. Возможно switch будет работать быстрее цикла, т.к.
 * вручную выполнена оптимизация по развертке цикла. */

switch (a) {
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
}
