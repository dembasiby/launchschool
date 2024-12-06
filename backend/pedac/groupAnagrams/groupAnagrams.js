/*
Group Anagrams

Write a function groupAnagrams(words) that takes an array of words 
as input and groups the anagrams together. Anagrams are words that 
have the same characters but in a different order.

Your function should return an array of arrays, where each inner 
array represents a group of anagrams. For words that do not have 
anagrams, they should be grouped into an array together.

The order of the groups and the order of words within each group 
does not matter.


Problem 
Input: array of words 
Output: array of arrays where each inner array represents a group o anagrams

Rules
- group anagrams together
- group words that do not have anagrams in one inner array

Question: 
anagrams? words same characters but different order.

Mental;
find anagrams for each word. group them them together.

Data structure:
- object of occurence count for each word.


Algorithm;
- declare a variable result and initialize it to an empty array 
- declare a variable nonAnagrams and initialize it to an empty array 
- declare a variable anagrams and initialize it to an empty object. It will have arrays as value
- loop through the input arr 
-- at each index:
--- declare a variable sortedWord and initialize it to the return value of sorting the current word 
--- if the object anagrams contains sortedWord as a key, push the new word into anagrams[sortedWord]
--- if not, create a new key with the value of sortedWord and add a new array with one value, the current word.
- start another loop through the keys of the object anagrams.
-- if the value of the current key which is the sub array has a length greater than 1, add the sub array to the result array
-- else add the sub array to the nonAnagrams array
- At the end of the loop, check if nonAnagrams is not empty, add it to the result array.
- return result array



*/

function groupAnagrams(arr) {
  let result = [];
  let anagrams = {};
  let nonAnagrams = [];

  function cleanWord(word) {
    return word.toLowerCase().replace(/[\W]/g, "");
  }

  arr.forEach((word) => {
    let cleansedWord = cleanWord(word);
    let sortedWord = cleansedWord.split("").sort().join("");

    if (anagrams[sortedWord]) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  });

  for (let subArr of Object.values(anagrams)) {
    if (subArr.length > 1) {
      result.push(subArr);
    } else {
      nonAnagrams.push(subArr[0]);
    }
  }

  return nonAnagrams.length > 0 ? result.concat(nonAnagrams) : result;
}

function generateTestData(baseWords, numAnagrams, numRandomWords) {
  const anagrams = [];
  const randomWords = [];

  // Generate shuffled versions of base words
  for (let i = 0; i < numAnagrams; i++) {
    const word = baseWords[i % baseWords.length];
    const shuffled = word
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
    anagrams.push(shuffled);
  }

  // Generate random words
  for (let i = 0; i < numRandomWords; i++) {
    const length = Math.floor(Math.random() * 8) + 3; // Word length between 3 and 10
    const randomWord = Array.from({ length }, () =>
      String.fromCharCode(97 + Math.floor(Math.random() * 26)),
    ).join("");
    randomWords.push(randomWord);
  }

  return [...anagrams, ...randomWords];
}

// Test the performance of your function
function performanceTest() {
  const baseWords = ["cat", "dog", "bat", "rat", "car", "star", "arts"];

  const testData = generateTestData(baseWords, 500000, 500000); // 5k anagrams + 5k random

  console.time("groupAnagrams");
  const result = groupAnagrams(testData);
  console.timeEnd("groupAnagrams");

  console.log("Number of groups:", result.length);
}

performanceTest();

// JavaScript test cases
// console.log(groupAnagrams(["listen", "silent", "enlist", "hello", "olhel"]));
// // Output: [['listen', 'silent', 'enlist'], ['hello', 'olhel']]
//
// console.log(groupAnagrams(["abc", "bca", "cab", "def", "fed"]));
// // // Output: [['abc', 'bca', 'cab'], ['def', 'fed']]
//
// console.log(groupAnagrams(["cat", "dig", "tac", "god", "act"]));
// // // Output: [['cat', 'tac', 'act'], ['dig', 'god']]
