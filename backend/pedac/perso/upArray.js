/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

If the array is invalid (empty, or contains negative integers or integers with more than 1 digit), return nil (or your language's equivalent).

Examples

Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6] (4325 + 1 = 4326)
[1, 2, 3, 9] would return [1, 2, 4, 0] (1239 + 1 = 1240)
[9, 9, 9, 9] would return [1, 0, 0, 0, 0] (9999 + 1 = 10000)
[0, 1, 3, 7] would return [0, 1, 3, 8] (0137 + 1 = 0138)

UNDERSTAND THE PROBLEM
Input:
- array of integers 
Output:
- array of integers or null if invalid array

Rules /Requirements
- Invalid if contains negative numbers, numbers greater than 9, or empty array
- array can be of any length 
- we may not rely on the input as a number.=> greater that the max safe integer. 
- add 1 to the current 'number'

- keep track of the 'carry' number in case the digit is 9

EXAMPLES 
[4, 3, 2, 5] would return [4, 3, 2, 6] (4325 + 1 = 4326)
[1, 2, 3, 9] would return [1, 2, 4, 0] (1239 + 1 = 1240)
[9, 9, 9, 9] would return [1, 0, 0, 0, 0] (9999 + 1 = 10000)
[0, 1, 3, 7] would return [0, 1, 3, 8] (0137 + 1 = 0138)



DATA STRUCTURES
- no need of an intermediary data structure. we can work with a copy of the array.

ALGORITHM
- loop through the input array `arr`. If any number is negative or greater than 9, return null;
- Declare a variable `carry` and initialize it to 0;
- Declare a variable `arr2` and initialize it to a copy of `arr`;
- Increment last element by 1.
- loop through `arr2` starting from the last element. 
-- Declare a variable `currentEl` and initialize it to sum of current element and `carry`;
--- if `currentEl` is less than or equal to 9, current element is equal to `currentEl`. reinitialize `carry` to 0. break the loop.
--- if not, current element is equal to the last digit of `currentEl and `carry` is equal to the first digit.
- At the end of the loop, if carry if greater than 0, prepend `carry` to the beginning of `arr2`
- return `arr2`

*/
function upArray(arr) {
  const N = arr.length;

  if (arr.length === 0) return null;

  for (let num of arr) {
    if (num < 0 || num > 9) return null;
  }

  let carry = 0;
  let arr2 = arr.slice();
  arr2[arr2.length - 1] += 1;

  for (let i = arr2.length - 1; i >= 0; i--) {
    let currentEl = arr2[i] + carry;

    if (currentEl <= 9) {
      arr2[i] = currentEl;
      carry = 0;
      break;
    }

    [carry, arr2[i]] = String(currentEl).split("").map(Number);
  }

  if (carry !== 0) arr2.unshift(carry);

  return arr2;
}

console.log(upArray([9, 9, 9]));
