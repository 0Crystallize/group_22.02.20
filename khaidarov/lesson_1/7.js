alert( null > 0 ); // Ложь
alert( null == 0 ); // Ложь
alert( null >= 0 ); // Истина
// Странный результат, причина в том, что не строгое равенство и сравнение работают по-разному.
// Сравнения преобразуют null в число и рассматривают его как 0. 