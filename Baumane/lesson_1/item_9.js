/**
 9 С помощью цикла do…while написать алгоритм для вывода чисел от 0 до 10
 включительно, чтобы результат выглядел так:
 ```
 0 – это ноль
 1 – нечетное число
 2 – четное число
 3 – нечетное число
 …
 10 – четное число
 ```
 **/
let s=0;
console.log('это 0'); // и это тоже четное число!
do {
s=s+1;
    console.log(s+'- нечетное число');
    s=s+1;
console.log(s+'- четное число');
}
while (s<=8);
