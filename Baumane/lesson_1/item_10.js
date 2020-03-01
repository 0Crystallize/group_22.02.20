/**10*. С помощью рекурсии организовать функцию возведения числа в степень.
    Формат: function power(val, pow), где val – заданное число, pow – степень.**/
let val=6, pow=3;
function power(val, pow) {
if (pow===1){
    return val;
}
else {
    return val*power(val, (pow-1));
}
}
alert(power(val, pow));