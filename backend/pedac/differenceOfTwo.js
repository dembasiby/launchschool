/*
 
Difference of Two
The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate numbers in the array.
The order of the numbers in the input array should not matter.

// Test cases
console.log(differenceOfTwo([1, 2, 3, 4]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7]));
//  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6]));
// [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4]));
// [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13]));
// []
//
// Input: array of unique numbers 
// output: array of pair of numbers which difference is two
//
// explicit requirements
// - pair of nnumbers that have a differennce of 2
// - result array is sorted in ascending order 
// - there are no duplicate numbers in the array 
// - the order of the numbers inn the input array should not matter
//
// Implicit requirements
// - each number can be in 0, 1 or more pairs.
//
// Data structures
// - the return value a nested array with pairs of nnumbers which differences is 2
//
// Algorithm
// - sort the array in ascending order
// - start an outer loop with a local variable i initialiized to 0
// - start a innner loop with a local varable j initialized at i + 1
// --- check if the number at index i has a difference of 2 with the number at index j
// --- if that is the case, add the pair at i and j to the result array and break the inner loop
// --- otherwise check the next index at j+1
// - at the end of the loop, return the result array

// express the purpose of the loop to make it a little clear
//
//
//
 */
function differenceOfTwo(arr) {
  let result = [];
  arr = arr.slice().sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] === 2) {
        result.push([arr[i], arr[j]]);
        break;
      }
    }
  }
  return result;
}

// Test cases
console.log(differenceOfTwo([1, 2, 3, 4]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7]));
//  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6]));
// [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4]));
// [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13]));
// []
