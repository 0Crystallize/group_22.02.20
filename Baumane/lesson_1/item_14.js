/**14*. Дан массив (создать такой же, с такими же значениями):
```
const arr = [
[2, 4, 6],
[1, 5, 10],
[7, 4, 1],
];
```
Задания:
    1 Найти массив, у которого сумма всех чисел максимальна, вывести в console.log
индекс этого массива.
2 Получить и вывести в console.log минимальное значение найденное в массиве,
    который мы получили в
первом пункте.
 **/
let a=0, b=0, c=0;
const arr1 = [2, 17, 6];
const arr2 = [1, 1, 10];
const arr3 = [0, 1, 10];
const arr = [arr1, arr2, arr3];

for (let i=0; i<3; i++) {
    a=a+arr1[i];

    b=b+arr2[i];
    c=c+arr3[i];
}

if ((a===b)&&(b===c)) {
    alert('Cуммы во всех массивах одинаковы');
}

    if ((a > b) && (a > c)) {
        console.log('1 - номер массива с максимальной суммой');
        if (b>c) {
            console.log('3 - номер массива с минимальной суммой, равной ' +  c);
        } else {
            console.log('3 - номер массива с минимальной суммой, равной ' + b);
        }

       // alert('1 - номер массива с максимальной суммой');
    }


if ((b>a)&&(b>c)) {
    console.log('2 - номер массива с максимальной суммой');

    if (a>c) {
        console.log('3 - номер массива с минимальной суммой, равной ' + c);
    } else {
        console.log('1 - номер массива с минимальной суммой, равной ' + a);
    }
   // alert( '2 - номер массива с максимальной суммой');
}
if ((c>a)&&(c>b)) {
    console.log('3 - номер массива с максимальной суммой');
    if (a>b) {
        console.log('2 - номер массива с минимальной суммой, равной ' + b);
    } else {
        console.log('1 - номер массива с минимальной суммой, равной '+ a);
    }


   // alert( '3 - номер массива с максимальной суммой');
}

