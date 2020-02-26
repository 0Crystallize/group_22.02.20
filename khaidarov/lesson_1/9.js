let a = -1;
        do {
            a++;
            if (a === 0){
                console.log(a, "- это ноль");
            } else if (a % 2 ===0){
                console.log(a, "- четное число");
            } else {
                console.log(a, "- нечетное число");
            }
        } while (a < 10);