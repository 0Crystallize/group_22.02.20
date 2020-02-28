'use strict'
let NumHW;
NumHW = prompt ('Введите номер домашнего задания №1-16');
switch(+NumHW)
{
    case 1:
        {
        let a=1;
        let b=1;
        let c;
        let d;

        c = ++a; // префиксная форма инкримента возвращает новое значение
        alert(c); // 2

        d = b++; // постфиксная форма инкримента возвращает страое значение
        alert(d); // 1

        c = 2+ ++a; // так как в предыдущих выражения переменная 'a' уже менялась то все изменения переменной были записаны в нее
        alert(c); // 5

        d = 2+ b++; //так как в предыдущих выражения переменная 'b' уже менялась то все изменения переменной были записаны в нее
        alert(d); // 4

        alert(a); // 3 так как инкримент использовался два раза на каждую из переменной 'a' и 'b' то получается что к каждой из переменной было прибавлена '1' два раза
        alert(b); // 3
        break;
        }
    case 2:
        {
        let a = 2;
        let x = 1 + (a *= 2); // запись (a*= 2) можно расшифровать как (a= a * 2)
        alert(a); //4
        alert(x); //5
        break;
        }
    case 3:
        {
            let a = -5;
            let b = -3;
            if((a>=0)&&(b>=0))
            {
                alert(a-b);
            }
            if((a<=0)&&(b<=0))
            {
                alert(a*b);
            }
            if (((a>=0)&&(b<=0))||((a<=0)&&(b>=0)))
            {
                alert(a+b);
            }
            break;
        }
    case 4:
        {
            let a = Math.floor(Math.random()*16);
            switch(a)
            {
                case 0:
                    alert(a);
                    a++;
                case 1:
                    alert(a);
                    a++;
                case 2:
                    alert(a);
                    a++;
                case 3:
                    alert(a);
                    a++;
                case 4:
                    alert(a);
                    a++;
                case 5:
                    alert(a);
                    a++;
                case 6:
                    alert(a);
                    a++;
                case 7:
                    alert(a);
                    a++;
                case 8:
                    alert(a);
                    a++;
                case 9:
                    alert(a);
                    a++;
                case 10:
                    alert(a);
                    a++;
                case 11:
                    alert(a);
                    a++;
                case 12:
                    alert(a);
                    a++;
                case 13:
                    alert(a);
                    a++;
                case 14:
                    alert(a);
                    a++;
                case 15:
                    alert(a);
                    a++;
            }
            break;
        }
    case 5:
        {
            const arg1=10;
            const arg2=5;
            let result;
            function plus(arg1,arg2)
            {
                return (result=arg1+arg2)
            }
            function minus(arg1,arg2)
            {
                return (result=arg1-arg2)
            }
            function multi(arg1,arg2)
            {
                return (result=arg1*arg2)
            }
            function divis(a,b)
            {
                return(result=arg1/arg2)
            }
        plus(arg1,arg2);
        alert(result);
        minus(arg1,arg2);
        alert(result);
        multi(arg1,arg2);
        alert(result);
        divis(arg1,arg2);
        alert(result);
        break
        }
    case 6:
        {
            const arg1=10;
            const arg2=5;
            let result;
            let operation;
            function plus(arg1,arg2)
            {
                return (result=arg1+arg2)
            }
            function minus(arg1,arg2)
            {
                return (result=arg1-arg2)
            }
            function multi(arg1,arg2)
            {
                return (result=arg1*arg2)
            }
            function divis(a,b)
            {
                return(result=arg1/arg2)
            }
            function mathOperation(arg1,arg2,operation)
            {
                operation = prompt('Введите знак того что вы хотите сделать с аргументами 1 и 2');
                switch(operation)
                {
                case '+':
                    plus(arg1,arg2);
                    alert(result);
                    break
                case '-':
                    minus(arg1,arg2);
                    alert (result);
                    break
                case '*':
                    multi(arg1,arg2);
                    alert(result);
                    break
                case '/':
                    divis(arg1,arg2);
                    alert (result);
                    break
                }
            }
            mathOperation(arg1,arg2,operation)
            break;
        }
    case 7:
        {
            if (null===0)//NULL - по типу объект из-за ошибки допущенной в разработке языка поэтому он не равен 0
            {
                alert(true)
            }
            else {
                alert(false)
            }
        }
    case 8:
        {
            let i=0;
            while(i<=100)
            {
                alert(i);
                i++;
            }
            break;
        }
    case 9:
        {
            let i=0;
            do{
                if (i===0){
                    alert(i+" - Это ноль")
                }
                if((i===1)||(i===3)||(i===5)||(i===7)||(i===9))
                {
                    alert(i+" - Это нечетное число")
                }
                if((i===2)||(i===4)||(i===6)||(i===8)||(i===10))
                {
                    alert(i+" - Это четное число")
                }
                i++;
            }while(i<=10)
            break
        }
    case 10:
        {
            let val;
            let pow;
            function power(val, pow)
            {
                if (pow == 1)
                {
                return val;
                } else
                {
                  return val * power(val, pow - 1);
                }
            }
            alert( power(2, 4) )
            break
        }
    case 11:
        {
            let money;
            let LastNum;
            money=+prompt('Сколько рублей вы хотите внести: ');
            LastNum=money;
            function ruble()
            {
                while (LastNum>15)
                {
                    LastNum=LastNum % 10;
                }
                if (LastNum === 1)
                {
                    alert("Ваша сумма в " + money + " рубль успешно зачислена.")
                }
                if ((LastNum>1)&&(LastNum<5))
                {
                    alert("Ваша сумма в " + money + " рубля успешно зачислена.")
                }
                if ((LastNum>4)||(LastNum === 0))
                {
                    alert("Ваша сумма в " + money + " рублей успешно зачислена.")
                }
            }
            ruble();
            break;
        }
    case 12:
        {
        let i=0
        for (i;i<10;alert(i++))
        {

        }
        }
    case 13:
        {
            let x ='x';
            for (let i=0;i<11;i++)
            {
                console.log(x);
                x = x +'xx';
            }
            break;
        }
    case 14:
        {
            const arr =
            [
                [2, 4, 6],
                [1, 5, 10],
                [7, 4, 1],
            ]
            let x=0;
            let y=0;
            let sum = [0,0,0];
            while(y<3)
            {
                x=0;
                while (x<3)
                {
                    sum [y]= sum[y] + arr[y][x];
                    x++;
                }
                alert (sum);
                y++;
            }
            alert(Math.max(sum[0],sum[1],sum[2]));
            alert(Math.min(sum[0],sum[1],sum[2]));
            break;
        }
    }
