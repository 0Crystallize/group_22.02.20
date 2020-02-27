"use strict";

function sum(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return sum(arg1, arg2);
        case 'minus':
            return minus(arg1, arg2);
        case 'multiplication':
            return multiplication(arg1, arg2);
        case 'division':
            return division(arg1, arg2);
        default:
            console.log('The unknow operation');
    }
}

let a = 5, b = 10;

let result = mathOperation(a, b, 'sum');

console.log(result);