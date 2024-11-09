# Bouncy Numbers

## Understand the Problem

### Input

### Output

### Rules

### Mental Model

## Example / Test Cases

```js
console.log(bouncyCount([]) === 0);
console.log(bouncyCount([11, 0, 345, 21]) === 0);
console.log(bouncyCount([121, 4114]) === 2);
console.log(bouncyCount([176, 442, 80701644]) === 2);
```

## Data Structure

## Algorithm

- initialize a `count` variable to track the number of bouncy numbers.
- iterate through the input array `arr`
- for each number, convert it to a string and split it to have a list of number strings
- for each list of numbers as string, check if it `isBouncy(stringArr)`. If so, increment the `count` variable by 1. Continue the process for all the numbers in the array `arr`
- return `count`

### isBouncy(numberString)

- if the size of the string array is less than 3 return `0`
- initialize a variable `ascendingCount` to `0`
- initialize a variable `descendingCount` to `0`
- initialize a `currentAscendingCount` and a `currentDescendingCount` each to `0`
- loop through the array of number strings starting from index 1. While element at current index is greater than the previous element, increment the `currentAscendingCount`. Else if currentAscendingCount >= 2 increment `ascendingCount` by one and reassign `currentAscendingCount` to 0
- do the same thing for `currentDescendingCount`
- return `ascendingCount` >= 1 and `descendingCount` >= 1

## Code

```js
function bouncyCount(arr) {
  return arr.filter((num) => isBouncy(String(num).split(""))).length;
}

function isBouncy(stringArr) {
  if (stringArr.length < 3) return 0;
  let ascendingCount = 0;
  let descendingCount = 0;
  let currentAscendingCount = 0;
  let currentDescendingCount = 0;

  for (let i = 1; i < stringArr.length; i++) {
    if (stringArr[i] >= stringArr[i - 1]) {
      currentAscendingCount++;
    } else {
      if (currentAscendingCount >= 2) {
        ascendingCount++;
        currentAscendingCount = 0;
      }
    }
  }
  for (let i = 1; i < stringArr.length; i++) {
    if (stringArr[i] <= stringArr[i - 1]) {
      currentDescendingCount++;
    } else {
      if (currentDescendingCount >= 2) {
        descendingCount++;
        currentDescendingCount = 0;
      }
    }
  }

  if (currentAscendingCount >= 2) ascendingCount++;
  if (currentDescendingCount >= 2) descendingCount++;
  return ascendingCount >= 1 && descendingCount >= 1;
}
```
