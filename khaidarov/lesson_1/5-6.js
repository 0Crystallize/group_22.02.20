function mul(i, n){
  return i ** n;
}

function sum(a, b){
  return a + b;
}

function diff(a, b){
  return Math.abs(a - b);
}

function div(a, b){
  var result = (b === 0) ? 'Error: b  < 0' : a /b ;
  return result;
}

console.log(mul(5, 3));
console.log(sum(3, 4));
console.log(diff(4, 5));
console.log(div(0, 5));






function mathOperation(arg1, arg2, operation){
  switch(operation.toLowerCase()){
    case 'mul':
      return mul(arg1, arg2);
    case 'sum':
      return sum(arg1, arg2);
    case 'diff':
      return diff(arg1, arg2);
    case 'div':
      return division(arg1, arg2);
    default:
      return 'Вы можете использовать следующие операции:\n-mul;\n-sum\n-diff\n-division';
  }
}

console.log(mathOperation());
console.log(mathOperation(5, 2, 'mul'));
console.log(mathOperation(5, 2, 'sum'));
console.log(mathOperation(5, 1, 'diff'));
console.log(mathOperation(5, 1, 'div'));