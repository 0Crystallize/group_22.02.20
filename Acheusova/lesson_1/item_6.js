/**
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
    operation – строка с названием
операции. В зависимости от переданного значения операции (использовать switch)
    выполнить одну из арифметических операций (использовать функции из задания 5) и
        вернуть полученное значение.
 * **/

<script type="text/javascript">

    function sum(a, b) {
        return(a + b);
    }

function diff(a, b) {
    return(a - b);
}

function mult(a, b) {
    return(a * b);
}

function div(a, b) {
    return(a / b);
}

function mathOperation(arg1, arg2, operation) {
    let a = arg1;
    let b = arg2;

    switch(operation) {
        case sum:
            return(sum(a, b));
            break;

        case diff:
            return(diff(a, b));
            break;

        case mult:
            return(mult(a, b));
            break;

        case div:
            return(div(a,b));
            break;
    }
}

</script>