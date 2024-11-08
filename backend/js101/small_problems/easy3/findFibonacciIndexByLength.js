function findFibonacciIndexByLength(num) {
  if (num < 2) return 1n;

  let count = 2n;
  let len = 0;
  let num1 = 1n;
  let num2 = 1n;

  while (len < num) {
    [num1, num2] = [num1 + num2, num1];
    count += 1n;
    len = num1.toString().length;
  }

  return count;
}

console.log(findFibonacciIndexByLength(2n) === 7n); // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n); // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);
console.log(findFibonacciIndexByLength(1000000));
// The last example may take a minute or so to run.
