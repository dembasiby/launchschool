function palindromeSubstrings2(str) {
  return substrings(str).filter(isPalindrome);
}

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function substrings(str) {
  let result = [];
  let startingIndex = 0;

  while (startingIndex <= str.length - 2) {
    let numChars = 2;

    while (numChars <= str.length - startingIndex) {
      let subsr = str.slice(startingIndex, startingIndex + numChars);
      result.push(subsr);
      numChars++;
    }
    startingIndex++;
  }

  return result;
}

console.log(palindromeSubstrings2("supercalifragilisticexpialidocious"));
// should return: ["ili"]
//
console.log(palindromeSubstrings2("abcddcbA"));
// should return: ["bcddcb", "cddc", "dd"]
//
console.log(palindromeSubstrings2("palindrome"));
// should log: []
//
console.log(palindromeSubstrings2(""));
// should log: []
