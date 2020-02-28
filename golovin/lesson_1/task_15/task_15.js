"use strict";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function generateArray(arr) {
    for (let i = 0; i < 10; i++) {
        let num = getRandomIntInclusive(-10, 10);
        arr.push(num);
    }

    return arr;
}

function getUniqueArray(arr) {
    let uniq_arr = [];

    for (let i = 0; i < arr.length; i++) {
        if (uniq_arr.indexOf(arr[i], 0) === -1) {
            uniq_arr.push(arr[i]);
        }
    }

    return uniq_arr;
}

function addElementsToUniqueArray(arr) {
    let len = arr.length;

    while (len < 10) {
        let num = getRandomIntInclusive(-10, 10);

        if (uniq_arr.indexOf(num, 0) === -1) {
            uniq_arr.unshift(num);
            len++;
        }
    }

    return arr;
}

function compareFunction(a, b) {
   if (a < 0 && b < 0) {
       if (Math.abs(a) < Math.abs(b)) {
           return -1;
       } else {
           return 1;
       }
   }

   if (a > 0 && b > 0){
       if (a < b) {
           return -1;
       } else {
           return 1;
       }
   }

   if (a < b) {
       return -1;
   } else {
       return 1;
   }
}

/*Point 1*/
let arr = [];
arr = generateArray(arr);

/*Point 2*/
console.log(arr);

/*Points 3, 4*/
let uniq_arr = [];
uniq_arr = getUniqueArray(arr);

/*Point 5*/
console.log(uniq_arr);

/*Point 6*/
uniq_arr = addElementsToUniqueArray(uniq_arr);

/*Point 7*/
console.log(uniq_arr);

/*Point 8*/
uniq_arr.sort(compareFunction);

/*Point 9*/
console.log(uniq_arr);

