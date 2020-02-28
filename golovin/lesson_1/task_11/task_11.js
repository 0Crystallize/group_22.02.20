"use strict";

let money = null;

function ask_user(money) {
    do {
        let choice = prompt('Какую сумму денег Вы хотите положить в банк?');
        money = +choice;

        if (!Number.isInteger(money) || money <= 0) {
            let ok = confirm('Ваш ввод неверен! Хотите попробовать ввести снова?');

            if (!ok) {
                return -1;
            }
        } else {
            return money;
        }
    }  while (true);
}

function print_sum(money) {
    if (money === -1) {
        alert('Вы не положили никакую сумму в банк...');
        return;
    }

    if (money >= 11 && money <= 20) {
        alert(`Ваша сумма в ${money} рублей успешно зачислена.`);
        return;
    }

    const last_digit = money % 10;

    if (last_digit === 0 || last_digit >= 5) {
        alert(`Ваша сумма в ${money} рублей успешно зачислена.`);
    } else if (last_digit < 5 && last_digit >= 2) {
        alert(`Ваша сумма в ${money} рубля успешно зачислена.`);
    } else {
        alert(`Ваша сумма в ${money} рубль успешно зачислена.`);
    }

}

money = ask_user(money);
print_sum(money);
