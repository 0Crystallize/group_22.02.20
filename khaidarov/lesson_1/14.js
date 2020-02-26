const arr1 = [2, 4, 6];
const arr2 = [1, 5, 1];
const arr3 = [7, 4, 1];
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
for (let i1 = 0; i1 < arr1.length; i1++) {
	sum1 += arr1[i1];
}
for (let i2 = 0; i2 < arr2.length; i2++) {
	sum2 += arr2[i2];
}
for (let i3 = 0; i3 < arr3.length; i3++) {
	sum3 += arr3[i3];
}
	if ((arr1 > arr2) && (arr1 > arr3)) {
		alert('Наибольшая сумма чисел в массиве ' + arr1);
	}
	if ((arr2 > arr1) && (arr2 > arr3)) {
		alert('Наибольшая сумма чисел в массиве ' + arr2);
	}	
	if ((arr3 > arr1) && (arr3 > arr2)) {
		alert('Наибольшая сумма чисел в массиве ' + arr3);
	}	
	if ((arr1 < arr2) && (arr1 < arr3)) {
		alert('Наименьшая сумма чисел в массиве ' + arr1);
	}
	if ((arr2 < arr1) && (arr2 < arr3)) {
		alert('Наименьшая сумма чисел в массиве ' + arr2);
	}	
	if ((arr3 < arr1) && (arr3 < arr2)) {
		alert('Наименьшая сумма чисел в массиве ' + arr3);
	}