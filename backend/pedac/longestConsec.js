// You are given an array of strings and an integer `k`.
// Your task is to return the first longest string consisting of `k` consecutive strings taken from the array.

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

/*
Understand the Problem
input: array, number 
output: string 
rules:
  - get the longest consecutive string from the input string 
  - if input array is empty return empty string 
  - if second number is greater than array length return empty string 

Example / Test cases:
["xyz", "abc"] 2 ==>>> "xyzabc"

Data Structure:
- array: to store the consecutive string 

Algorithm:
- if k is negative, equals to 0, or greater than the length of the array, return an empty string.
- declare and an array `consecutiveStringArr` and initialize it to an empty array.
- loop through the array up to the length plus k plus 1.
-- add the substring of k size to `consecutiveStringArr`, starting at the current index 
- declare a variable `maxLength` and initialize it to 0 
- declare a variable `longestConsecutiveString` and initialize it to an empty string 
- start another loop through `consecutiveStringArr`
-- if the length of the current string is greater than `maxLength`
--- `maxLength` is equal to the length of the current string 
--- `longestConsecutiveString` is equal to the current string
- return `longestConsecutiveString`
*/
// Test Cases
console.log(
  longestConsec(
    ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
    2,
  ) === "abigailtheta",
);
console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1,
  ) === "oocccffuucccjjjkkkjyyyeehh",
); // true
console.log(
  longestConsec(
    [
      "itvayloxrp",
      "wkppqsztdkmvcuwvereiupccauycnjutlv",
      "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
    ],
    2,
  ) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck",
); // true
console.log(
  longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2) ===
    "wlwsasphmxxowiaxujylentrklctozmymu",
); // true
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3) ===
    "ixoyx3452zzzzzzzzzzzz",
); // true
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === "",
); // true
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15) === "",
); // true
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0) === "",
); // true

function longestConsec(arr, k) {
  if (k > arr.length || k <= 0) return "";
  let consecutiveStringArr = [];
  let maxLength = 0;
  let longestConsecutiveString = "";

  for (let i = 0; i < arr.length - k + 1; i++) {
    consecutiveStringArr.push(arr.slice(i, i + k).join(""));
  }

  consecutiveStringArr.forEach((str) => {
    if (str.length > maxLength) {
      maxLength = str.length;
      longestConsecutiveString = str;
    }
  });

  return longestConsecutiveString;
}

function longestConsec2(arr, k) {
  if (k > arr.length || k <= 0) return "";

  let maxLength = 0;
  let longestConsecutiveString = "";
  let N = arr.length;

  for (let i = 0; i <= N - k; i++) {
    let currentSubtr = arr.slice(i, i + k).join("");
    if (currentSubtr.length > maxLength) {
      maxLength = currentSubtr.length;
      longestConsecutiveString = currentSubtr;
    }
  }

  return longestConsecutiveString;
}
