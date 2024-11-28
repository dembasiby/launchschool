# FIND FIBONACCI INDEX BY LENGTH

## Understand the Problem

### Input:

- The input `N` represents the number of digits (in big Int)

### Output:

- The output represents the `ith` Fibonacci number that has `N` number of digits

### Requirements / Rules

- Fibonacci numbers start with two numbers, `1` and `1` representing the first and second Fibonacci numbers. All the remaining Fibonacci numbers will form based on a simple formula with those first two numbers as the base case.
- Formula: `Fibonacci[n] = Fibonacci[n-1] + Fibonacci[n-2]`

### Mental Model

- start with the first and second Fibonacci numbers and check of the number has `N` digit. If not continue, otherwise, return the index + 1 of the number.

## Examples / Test Cases

## Data Structures

- in the brute force approach, no need of an intermediary data structure.

## Algorithm

- DECLARE a `index` variable and INITIALIZE it to `1n`
- DECLARE a `len` variable and INITIALIZE it to `0`
- DECLARE a `current` variable and INITIALIZE it to `1n`
- DECLARE a `previous` variable and INITIALIZE it to `1n`
- WHILE `len` is less than `N`
  -t `current` is reinitialized to the sum of `previous` + `current`
  -- `index` is incremented by 1
  -- `len` is the length of `current`
- return `index` + 1

## Code

```js
function findFibonacciIndexByLength(bigIntNum) {
  let result = BigInt(0);
  let index = 1n;
  let len = String(bigIntNum).length;
  let current = 1n;
  let previous = 1n;

  while (len < bigIntNum) {
    let temp = current;
    current += previous;
    previous = temp;
    index++;
    len = String(current).length;
  }

  return index + 1n;
}
```
