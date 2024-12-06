# Maximum Sum Subarray

The maximum sum sub array problem consists in finding the maximum sum of a contiguous subsequence in an array of integers. Example `maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])` should be 6 `[4, -1, 2, 1]`

If the array is made of only negative numbers, return 0 instead.

## Understand the problem

### Input:

An array of positive and/or negative numbers

### Output:

An integer representing the maximum sum of a contiguous subsequence.

### Rules:

- if the array is made of only negative numbers, return 0
- the numbers in the sum should be contiguous, e.g valid sub arrays.

### Mental model

Have a current sum and add elements as long as the total is greater or equal 0. At each step, check if the current sum is greater than the result. If so, result is equal to current sum.
Whenever current sum is less than 0, reinitialize it to 0.

## Example

## Data Structure

No need for an intermediary data structure

## Algorithm

- Declare a variable `result` and initialize it to `0`
- Declare a variable `currentSum` and initialize it to 0
- Loop through the array starting with index `0`
  -- Add current element to `currentSum`
  -- If `currentSum` is less than `0` `currentSum` equals 0
  -- Otherwise, `result` is equals to the maximum of `result` and `currentSum`
- Return result

## Code

```js
function maxSequence(arr) {
  let result = 0;
  let currentSum = 0;

  arr.forEach((num) => {
    currentSum += num;
    if (currentSum < 0) {
      currentSum = 0;
    } else {
      result = Math.max(result, currentSum);
    }
  });

  return result;
}
```
