let a = 5;
let b = -2;
let c;
let d;
let e;
c = a - b;
d = a * b;
e = a + b;
	let message = ((a >= 0) && (b >= 0)) ? c :
		((a < 0)&&(b < 0)) ? d :
		e ;
		alert(message);