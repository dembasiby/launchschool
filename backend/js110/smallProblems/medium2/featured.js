function isFeatured(num) {
  let digits = String(num).split("");

  return (
    num % 2 !== 0 &&
    num % 7 === 0 &&
    digits.every((d, idx) => digits.indexOf(d) === idx)
  );
}

function featured(num) {
  const LARGEST_FEATURED_NUMBER = 9876543201;
  const NO_POSSIBLE_NUMBER =
    "There is no possible number that fulfills those requirements.";

  if (num >= LARGEST_FEATURED_NUMBER) return NO_POSSIBLE_NUMBER;
  let number = num % 2 === 0 ? num + 1 : num + 2;

  while (number <= LARGEST_FEATURED_NUMBER) {
    if (isFeatured(number)) return number;
    number += 2;
  }

  return NO_POSSIBLE_NUMBER;
}

console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9876543186)); // 9876543201
console.log(featured(9876543200)); // 9876543201
console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."

// Considering a function that takes a string `string` and an array `arr` as parameters
// Declare a variable `sortedString` to the sorted and lowerCased version of `string`
// Declare a variable `result` and initialize it to an empty array
// LOOP through `arr`, with the current word under iteration named  `currentWord``
// - Declare a variable `sortedAndLowerCasedWord` and initialize it to the lowerCase and sorted version of `currentWord`
//   if `sortedAndLowerCasedWord` is equal to `sortedString`, add `currentWord` to `result`
// Return `result`
//
//

function sortedAndLowerCasedString(str) {
  return str.toLowerCase().split("").sort().join("");
}

function isAnagramOf(str1, str2) {
  return sortedAndLowerCasedString(str1) === sortedAndLowerCasedString(str2);
}

function anagrams(inputStr, arr) {
  return arr.filter((currentWord) => isAnagramOf(currentWord, inputStr));
}
//
// //JavaScript test cases
// console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));
// // ['aabb', 'bbaa']
//
// console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]));
// // ['carer', 'racer']
//
// console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "Racer"]));
// // ['carer', 'Racer']
//
// console.log(anagrams("laser", ["lazing", "lazy", "lacer"]));
// // []
