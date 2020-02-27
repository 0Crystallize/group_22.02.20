"use strict";

/**
 *
 * @func {int}
 * **/
function max_sum(arr) {
    let sum = null;
    let max_sum = null;
    let max_sum_idx = null;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            sum += arr[i][j];
        }

        if (sum > max_sum) {
            max_sum = sum;
            max_sum_idx = i;
        }

        sum = 0;
    }

    return max_sum_idx;
}

function min_value_in_arr(arr, row) {
    let min = arr[row][0];

    for (let j = 0; j < 3; j++) {
        if (arr[row][j] < min) {
            min = arr[row][j];
        }
    }

    return min;
}

const arr = [
    [2, 4, 6],
    [1, 5, 10],
    [7, 4, 1]
];

const max_sum_idx = max_sum(arr);
console.log( min_value_in_arr(arr, max_sum_idx) );
