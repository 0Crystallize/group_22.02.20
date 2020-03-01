/**6 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2,
                                                                  operation), где arg1, arg2 – значения аргументов, operation – строка с названием
операции. В зависимости от переданного значения операции (использовать switch)
    выполнить одну из арифметических операций (использовать функции из задания 5) и
        вернуть полученное значение.

 **/

let arg1 = 15, arg2 = 3,  operation = '-', result;

function mathOperation(arg1, arg2, operation){
    switch(operation) {
        case '+':
            return arg1 + arg2;
        case '-':
            return arg1 - arg2;
        case '*':
            return arg1 * arg2;
        case '/':
            return arg1 / arg2;
    }
}

console.log(mathOperation(arg1, arg2, operation))