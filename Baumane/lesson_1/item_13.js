/**
 * 13*. Нарисовать горку с помощью console.log (используя цикл for), как показано на
 рисунке, только у вашей горки должно быть 20 рядов, а не 5:
 ```
 x
 xxx
 xxxxx
 xxxxxxx
 xxxxxxxxx
 ```
**/
let val='x'
let a = [];
n=10;
function addxx(n) {
    if (n === 0) {

        a.map(item => {
            let div = document.createElement('div');
            div.innerHTML = item.toString();
            document.body.appendChild(div);
        })

    } else {
        a.push(val)
        val = val + 'xx'
        addxx((n - 1));
    }
}
addxx(n)



