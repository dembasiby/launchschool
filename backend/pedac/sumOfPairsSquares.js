/*
 *
 * Sum of Pairs Squares
 * Write a function sumOfPairsSquares(numbers) that takes an array of numbers
 * as input and returns an array of pairs of numbers whose sum is a
 * perfect square. The result array should be sorted in ascending order of values.
 *
 * You may not use Math.sqrt().
 *
 * UNDERSTAND THE PROBLEM
 * Input:
 * - array of numbers
 * Output:
 * - an array of numbers whose sum is a perfect square
 *
 * Rules
 * - perfect square is a number who is the product of a whole number time itself. Example
 *   can be 91 (9 x 9) or 36 (6x6)
 *
 * Mental model
 * - generate all pairs. For each pair, get the sum and check if it's a
 *   perfect square, if it is add it as an inner array to the result array.
 *
 *
 * EXAMPLES / TEST CASES
 */
// console.log(sumOfPairsSquares([0, 1]));
// Output: [[0, 1]]

console.log(sumOfPairsSquares([1, 2, 3, 4, 5]));
// Output: [[1, 3], [4, 5]]

console.log(sumOfPairsSquares([1, 9, 16, 402, 528]));
// Output: [[1, 528], [9, 16]]

console.log(sumOfPairsSquares([2, 4, 6, 8]));
// Output: []

console.log(sumOfPairsSquares([]));
[];
//
/*
 *
 * DATA STRUCTURE
 * Input: array
 * Output: array of arrays
 *
 *
 * ALGORITHM
 * Initialize a variable `result` to an empty array
 * Start an outer loop on the input array with the index variable `oIdx` initialize at 0
 * -- Start an innerr loop with the index variable `iIdx` initiazed at `oIdx + 1`
 * --- Create an array `currentPair` with the element at index `oIdx` and the element at `iIdx` as values.
 * --- Add `currentPair` to `result`
 * - Start a loop on the `result` array and filter pairs which sum is a perfect sum. We will check the perfect sum
 *   with a helper function isPerfectSquare with a number as parameter
 *
 *
 * isPerfectSquare helper will take a number as parameter;
 * - Start a loop from 1 until `i x i === num`
 *   if `i x i === num` return true
 * - at the end of the loop, return false
 *
 * CODE
 */

function sumOfPairsSquares(arr) {
  let result = [];

  for (let oIdx = 0; oIdx < arr.length; oIdx++) {
    for (let iIdx = oIdx + 1; iIdx < arr.length; iIdx++) {
      result.push([arr[oIdx], arr[iIdx]]);
    }
  }

  return result.filter((sumArr) => isPerfectSquare(sumArr[0] + sumArr[1]));
}

function isPerfectSquare(num) {
  for (let i = 1; i * i <= num; i++) {
    if (i * i === num) return true;
  }

  return false;
}
