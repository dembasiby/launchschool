/*
 *
 * Create a function that takes an array of integers as an argument.
 * The function should return the minimum sum of 5 consecutive numbers
 * in the array. If the array contains fewer than 5 elements,
 * the function should return null.
 *
 * P:
 * Input: array of integers
 *
 * Output: minimum sum of 5 consecutive numbers or null if the
 * array has less that 5 elements
 *
 * Mental model
 * - generate the sums of all 5 consecutive integers
 * - choose the smallest sum;
 *
 * Rules
 * - if the length of the array is less than 5, return null
 *
 * E:
 * - See below
 *
 * D:
 * Input: array
 * Output: a number or null
 *
 * A:
 * If the length of the array is less than 5, return null
 * initialize a `sum` variable to max integer.
 * loop through the array, starting with the first element.
 * - at each element, initialize a `currentSum` variable to 0
 *   start an inner loop from the current until current index + 5
 *   add up the value of each element to `currentSum`
 * - at the end of the inner loop, reassign the `sum` value to the
 *   minimum value of `sum` and `currentSum`
 * - return sum;
 *
 *   N = 6
 *   arr.length - 4 == 6 - 4 === 2
 *   0 1 2 3 4  5
 *   1 2 3 4 5 -5
 */
const p = console.log;

// function minimumSum(arr) {
//   if (arr.length < 5) return null;
//
//   let sum = Number.MAX_VALUE;
//
//   for (let i = 0; i < arr.length - 4; i++) {
//     let currentSum = arr.slice(i, i + 5).reduce((acc, n) => acc + n, 0);
//     sum = Math.min(sum, currentSum);
//   }
//
//   return sum;
// }
function minimumSum(arr) {
  if (arr.length < 5) return null;

  let currentSum = 0;
  let minSum = Number.MAX_VALUE;
  let [left, right] = [0, 0];

  while (right < 5) currentSum += arr[right++];
  minSum = Math.min(minSum, currentSum);

  while (right < arr.length) {
    currentSum += arr[right];
    currentSum -= arr[left];
    minSum = Math.min(minSum, currentSum);
    left++;
    right++;
  }

  return minSum;
}
p(minimumSum([1, 2, 3, 4, 5, -5]));
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);
