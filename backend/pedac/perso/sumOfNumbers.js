/**
 * @param array of numbers
 * @returns a single integer representing the sum of
 * all the numbers in the array
 *
 * What is the maximum size of the array?
 * What is the maximum number in the array?
 * Is there a possibility of getting Infinity?
 * Are numbers positive numbers ? Or a mix ? or a possibility
 * of having only negative numbers?
 * In this case downflow possibility?
 *
 * Examples:
 * [1, 2, 3, 4, 5] => 15
 * [] => 0
 * [3] => 3
 *
 *
 * Data structure:
 * No additional data structure needed here, just the input array
 *
 * Algorithm
 * LOOP through the array and add the current element to a result variable
 * return the value of the result variable whenn the loop is over
 *
 * Code:
 */

function sumOfNumbers(arr) {
  let result = 0;
  arr.forEach((num) => (result += num));
  return result;
}

console.log(sumOfNumbers([1, 2, 3, 4, 5]));
console.log(sumOfNumbers([]));
console.log(sumOfNumbers([3]));
