/*
 * PROBLEM DESCRIPTION
 * Create a function that takes an array of integers as an argument
 * and returns an array of two numbers that are closest together
 * in value. If there are multiple pairs that are equally close,
 * return the pair that occurs first in the array.
 *
 *
 * UNDERSTAND THE PROBLEM
 * Input:
 * - an array of integers
 *
 * Output:
 * - an array of two numbers that are closest together in value.
 *
 * Rules
 * - Return pairs that are closest in value
 * - if two pairs has the same distance value, return the
 *   pair that occurs first in the array
 *
 * Mental model
 * - For each value in the array, check its distance with other
 *   values starting from its index + 1;
 *
 * EXAMPLES / TEST CASES
 *
 *
 * DATA STRUCTURES
 * - Input: array
 * - Output: array
 * - Intermediary DS: none
 *
 * ALGORITHM
 * - initialize a variable minDistance = Number.MAX_VALUE
 * - initialize a variable result to an empty array
 * - Start an outer loop with `oIndex` initialized at 0
 * - - initialize a variable `num1` to the value of the element at
 *   index `oIndex`
 *   - Start an inner loop with `iIndex` initialized at `oIndex + `
 * - - initialize a variable `num1` to the value of the element at
 *      oIndex + 1
 *   -- initialize a variable `currentDiff` and set it to the absolute value
 *      of the difference between `num1` and the number at index `iIndex`
 *      if `currentDiff` is less than `minDistance`, `minDistance` is set to
 *      `currentDiff`
 * - return `result`
 * CODE
 *
 */
const closestNumbers = (arr) => {
  let minDistance = Number.MAX_VALUE;
  let result = [];

  for (let oIndex = 0; oIndex < arr.length; oIndex++) {
    let num1 = arr[oIndex];
    for (let iIndex = oIndex + 1; iIndex < arr.length; iIndex++) {
      let num2 = arr[iIndex];
      let currentDiff = Math.abs(num1 - num2);
      if (currentDiff < minDistance) {
        minDistance = currentDiff;
        result = [num1, num2];
      }
    }
  }

  return result;
};

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11])); // diff = 4
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27])); // diff = 2
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));
