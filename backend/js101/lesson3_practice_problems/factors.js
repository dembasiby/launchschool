function factors(number) {
  let divisor = number;
  let factors = [];

  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(23));
console.log(factors(0));
console.log(factors(-23));
console.log(factors(200));
console.log(factors(98));
console.log(factors(230));
console.log(factors(293));
