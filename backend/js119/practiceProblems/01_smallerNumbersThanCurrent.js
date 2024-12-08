const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

/*
 *
 * PROBLEM DESCRIPTION
 *
 * Create a function that takes an array of numbers as an argument. For each number,
 * determine how many numbers in the array are smaller than it, and place the answer
 * in an array. Return the resulting array.
 *
 * When counting numbers, only count unique values. That is, if a number occurs
 * multiple times in the array, it should only be counted once.
 *
 *
 * UNDERSTAND THE PROBLEM
 * Input: an array of numbers
 *
 * Output: an array of numbers representing the count of elements that are smallerr
 * than the current elements
 *
 * Rules
 * - duplicates are counted once
 * - count the number of unique elements that are smaller than the current element
 *
 * Mental model
 * - for each element of the array, count unique elements that are smaller
 *
 * EXAMPLE
 * See below
 *
 * DATA STRUCTURE
 * - input: arrray
 * - output: array
 * - We can use arrays to store single elements smaller than the currrent element
 *
 * ALGORITHM
 * FOR each array element
 * - Initialize a new variable `current` equal to the element at the current index
 *   Loop through the array
 * - count the number of unique elements in the array that are smaller
 *   - build 2 for loops,
 *
 *
 */
function smallerNumbersThanCurrent(arr) {
  let result = [];

  for (let idx1 = 0; idx1 < arr.length; idx1++) {
    let current = arr[idx1];
    let smallers = [];

    for (let idx2 = 0; idx2 < arr.length; idx2++) {
      if (arr[idx2] < current && !smallers.includes(arr[idx2])) {
        smallers.push(arr[idx2]);
      }
    }
    result[idx1] = smallers.length;
  }

  return result;
}

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];

p(eq(smallerNumbersThanCurrent(myArray), result));
