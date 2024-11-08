function palindromeSubstrings(string) {
  let result = [];
  let substringsArr = getSubstrings(string);

  substringsArr.forEach((substring) => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}

function getSubstrings(string) {
  let result = [];

  for (let i = 0; i < string.length - 1; i++) {
    let substring = string[i];
    for (let j = i + 1; j < string.length; j++) {
      substring += string[j];
      result.push(substring);
    }
  }
  return result;
}

function isPalindrome(substring) {
  let leftIndex = 0;
  let rightIndex = substring.length - 1;

  while (rightIndex > leftIndex) {
    if (substring[leftIndex] !== substring[rightIndex]) {
      return false;
    }

    leftIndex++;
    rightIndex--;
  }

  return true;
}

console.log(palindromeSubstrings("supercalifragilisticexpialidocious"));
// should return: ["ili"]
//
console.log(palindromeSubstrings("abcddcbA"));
// should return: ["bcddcb", "cddc", "dd"]
//
console.log(palindromeSubstrings("palindrome"));
// should log: []
//
console.log(palindromeSubstrings(""));
// should log: []
