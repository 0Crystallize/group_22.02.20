let a = 1, b = 1, c, d;

c = ++a; // префиксный инкремент; a = 2
alert(c); // 2

d = b++; // постфиксный инкремент; b = 2
alert(d); // 1

c = 2+ ++a; // c = 2 + (2 + 1); a = 3
alert(c); // 5

d = 2+ b++; // d = 2 + 2; b = 3
alert(d); // 4

alert(a); // 3
alert(b); // 3