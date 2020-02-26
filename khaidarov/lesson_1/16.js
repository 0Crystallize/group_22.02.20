let numb = Math.floor(Math.random() * (41 - 10)) + 10 ; // Загадываем количство камней от в дипазоне от 10 до 40.
let dec = ' шт.'
let a = 1;
let b = 2;
let c = 3;
while (numb > 5) { // Задаем цикл, пока остаток камней не будет равнен 0.
  alert('На столе ' + numb + dec);
  if (numb === 40 || numb === 36 || numb === 32 || numb === 28 || numb === 24 || numb === 20 || numb === 16 || numb === 12 || numb === 8) {
	  alert('Мы рискуем проиграть! Вытащите ' + a + dec);
  }
  if (numb === 39 || numb === 35 || numb === 31 || numb === 27 || numb === 23 || numb === 19 || numb === 15 || numb === 11 || numb === 7) {
	  alert('Все под контролем. Вытащите ' + c + dec);
  }
  if (numb === 38 || numb === 34 || numb === 30 || numb === 26 || numb === 22 || numb === 18 || numb === 14 || numb === 10 || numb === 6) {
	  alert('Все под контролем! Вытащите ' + b + dec);
  }
  if (numb === 37 || numb === 33 || numb === 29 || numb === 25 || numb === 21 || numb === 17 || numb === 13 || numb === 9 || numb === 5) {
	  alert('Все под контролем! Вытащите ' + a + dec);
  }
	let ourChoice = prompt('Сколько камней хотите убрать? 1, 2 или 3?');
	alert( 'Вы убрали ' + ourChoice + ', осталось ' + (numb = numb - ourChoice));
	let computerChoice = Math.floor(Math.random() * (4 - 1)) + 1 ;
	alert( 'Компьютер убрал ' + computerChoice + ', осталось ' + (numb = numb - computerChoice));	
}
if (numb === 3 || numb === 2 || numb === 1) {
	  alert('Поздравляем с победой!!!');
}
if (numb === 4 || numb === 0) {
		alert('Поражние... Повезет в следующий раз =(');
}