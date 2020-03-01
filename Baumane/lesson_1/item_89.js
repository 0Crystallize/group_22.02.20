/**
8 С помощью цикла while вывести все простые числа в промежутке от 0 до 100 - это называется решето ?
    (можно без оптимизаций).
**/
//Решето Эратосфена
const arr=[];
let j=2, s=0;
const arr2 = [];
let k=100;
for (let i=1; i<=k; i++) {
    arr[i]=i;
}

for (let n=2; n<Math.sqrt(k); n++) {

    while (s <= k) {
        s = n * j;
        j++;
        for (let m = 1; m <=k; m++) {
            if (arr[m] === s) {
                arr[m] = ' ';
            }
        }
    }

    j=2;
    s=0;
}


 arr. splice(1, 1);
 for (m=1; m < arr. length; m++){
    if (!(arr[m]===' ')) {
        arr2.push(arr[m]);
    }
}
 alert(arr2);