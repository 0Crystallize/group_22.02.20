"use strict";

let a = 1, b = 1, c, d;

c = ++a;
alert(c); // 2 // Здесь префиксное значение поэтому мы прибавляем еденицу(++а), т е а у нас а теперь будет = 2.

d = b++;
alert(d); // 1 // Здесь постфиксное поэтому мы прибавляем 1 но в результате будет предыдущее значение переменной.

c = 2+ ++a;
alert(c); // 5 // Тут я знаю что а уже = 2, поэтому 2+1+2 и того 5.

d = 2+ b++;
alert(d); // 4 // Здесь так же но т к это постфиксное значение то в ответ идет 4 т е минус еденица.

alert(a); // 3 // Ответ 3 потому что в а мы прибавляли по еденице в 1 и 3 примерах.
alert(b); // 3 // тоже самое только прибавляли во 2 и 4 примерах.