// Given two arrays, return whether they are opposites of each other.
// That means both arrays are comprised only from elements a and b and the occurrences
// of those elements are swapped between the two arrays.

// Examples

/*
INput: 2 arrays 
Output: boolean value (true/false)

Rules:
- whether we the same values in each of the array, even if the number of occurrences may differ
- both should have the same unique values 

Mental model:
based on the input arrays, generate two arrays with unique elements. Compare the the values are the same.

Ds:
- Two arrays to store unique values of both arrays

Algorithm:
- getUniqueValues (helper) => return the unique values 

- two variables `uniques1` and `unique2` and initialize with `getUniqueValues` 
- if the length of the two arrays are different, we return false
- sort each one of the arrays
- loop through both. if the current values are different, we return false

- we return true

*/

function isAntiArray(arr1, arr2) {
  let unique1 = getUniqueValues(arr1);
  let unique2 = getUniqueValues(arr2);

  if (unique1.length !== unique2.length) return false;

  for (let i = 0; i < unique1.length; i++) {
    if (!unique2.includes(unique1[i])) return false;
  }

  return arr1.every((val, idx) => val !== arr2[idx]);
}

function getUniqueValues(arr) {
  return arr.filter((val, idx) => arr.indexOf(val) === idx);
}

// console.log(getUniqueValues(["1", "0", "0", "1"]))

console.log(isAntiArray([3.14, false, false], [false, 3.14, false]) === false); // false
//
console.log(isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"]) === true); // true
console.log(
  isAntiArray(
    ["apples", "bananas", "bananas"],
    ["bananas", "apples", "apples"],
  ) === true,
); // true
console.log(isAntiArray([3.14, true, 3.14], [3.14, false, 3.14]) === false); // false
console.log(isAntiArray([3.14, true, 3.14], [true, "3.14", true]) === false); // false
console.log(isAntiArray([3.14, false, 3.14], [false, 3.14, false]) === true); // true
console.log(isAntiArray([3.14, false, 3.14], [false, 3.14, true]) === false); // false
console.log(isAntiArray([3.14, true], [3.14]) === false); // false
