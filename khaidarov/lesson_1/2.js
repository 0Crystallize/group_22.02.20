let a = 2;
let x = 1 + (a *= 2);
alert(x); // x = 5, т.к. 1 + (2 * 2) = 5.
alert(a); // a = 4, т.к. мы выполнили присваивание с умножением на 2 для "a".