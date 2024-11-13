# Non-even Substrings

Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

`solve("1341")` = 7. See test cases for more examples.

Good luck!

## Understand the Problem

### Input: a string of integers

### Output: number of odd-numbered substrings that can be formed

### Rules/ Requirement

- count of odd-numbered substrings
- substring can be of 1 or more numbers.
- a substring should be an odd number to be counted

### Mental model;

- count all the substring which last number is odd.

## Example

"1341" => 1, 1, 3, 13, 41, 341, 1341, a total of 7

## Data structure

- No need for an intermediary data structure.

## Algorithm

- declare a new variable `oddNumberCount` and initialize it to `0`
- loop through the string with an outer loop, over each of the digit with an index variable `i`.
  -- If the number at index `i` is an odd number, increment `oddNumberCount` by 1.
  -- start an inner loop with a variable `j` initialize at `i + 1`
  --- for each of the digit at the index of the inner loop, if it is odd, increment `oddNumberCount` by 1
- return the value of `oddNumberCount`

## Code

```js
function solve(s) {
  let oddNumberCount = 0;

  if (s.length === 0) return 0;

  for (let i = 0; i < s.length; i++) {
    if (Number(s[i]) % 2 !== 0) oddNumberCount++;

    for (let j = i + 1; j < s.length; j++) {
      if (Number(s[j]) % 2 !== 0) oddNumberCount++;
    }
  }

  return oddNumberCount;
}

console.log(solve("1341"));
```

Version 2

```js
function solve(s) {
  let oddNumberCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (Number(s[i]) % 2 !== 0) oddNumberCount += i + 1;
  }

  return oddNumberCount;
}
```

Version 3

```js
function solve(s) {
  return s.split("").reduce((acc, n, idx) => {
    return Number(n) % 2 !== 0 ? acc + idx + 1 : acc;
  }, 0);
}
```

```

```
