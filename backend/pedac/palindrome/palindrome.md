## Algorithm

- given a function `palindrome` which takes two parameters `startingNumber` and `count`
- if count is 0, return an empty array
- declare a variable `result` and initialize it to an empty array
- if `startingNumber` is less than 10, `startingNumber` is equal to 10
- start a loop. While the length of `result` is less than `count`
  -- declare a variable `currentNumber` and initialize it to the string value of `startingNumber`
  -- if the reverse value of `currentNumber` is equal to `currentNumber`, add `startingNumber` to `result`
  -- increment `startingNumber` by one
- return `result`

## Code

```js
function palindrome(startingNumber, count) {
  if (count === 0) return [];
  let result = [];

  if (startingNumber < 10) {
    startingNumber = 10;
  }

  while (result.length < count) {
    let currentNumber = String(startingNumber);
    if (currentNumber === currentNumber.split("").reverse().join("")) {
      result.push(startingNumber);
    }
    startingNumber++;
  }

  return result;
}
```
