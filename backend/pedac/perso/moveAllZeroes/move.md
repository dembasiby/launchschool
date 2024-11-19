# Move All Zeroes to End

## Problem Statement

Given an array arr[]. Push all the zeros of the given array to the right end of the array while maintaining the order of non-zero elements. Do the mentioned change in the array in place.

## Understand the Problem

### Input:

- an array of **positive numbers**, that may or may not include `0`s

### Output:

- the same array provided as input, with all the `0` moved to the right.

### Rules

- changes to the array are made in-place
- all the zeros are moved to the end of the array
- all the non-zeros are moved in front of the array
- non-zero elements maintain their initial order in the array
- We are not returning any value

### Mental Model

Use a two-pointer approach. Whenever a non-zero is found, swap the element at index of slow pointer with the one at the fast pointer position and increment the slow pointer.

## Examples:

Input: `arr[] = [1, 2, 0, 4, 3, 0, 5, 0]`
Output: `[1, 2, 4, 3, 5, 0, 0, 0]`
Explanation: There are three 0s that are moved to the end.
Input: `arr[] = [10, 20, 30]`
Output: `[10, 20, 30]`
Explanation: No change in array as there are no 0s.
Input: `arr[] = [0, 0]`
Output: `[0, 0]`
Explanation: No change in array as there are all 0s.

## Data Structure

- the optimal approach does not use any additional data structure.

## Algorithm

- Considering a function `moveZeroesToEnd` with one array parameter `arr`
- Declare a variable `slow` initialized to `0`
- LOOP through the array `arr` using the variable `i` as index, initialized to `0`
  - If the element at the current index `i` is not zero
    - swap the element at index `i` with the element at index `slow`
    - increment `slow` by 1.

## Code

```js
function pushZerosToEnd(arr) {
  let slow = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      [arr[slow], arr[i]] = [arr[i], arr[slow]];
      slow++;
    }
  }
}
```
