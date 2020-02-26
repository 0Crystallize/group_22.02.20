function power(val, pow) {
  let result = 1;
  for (let i = 0; i < pow; i++) {
    result *= val;
  }
  return result;
}
alert( power(5, 2) ); 