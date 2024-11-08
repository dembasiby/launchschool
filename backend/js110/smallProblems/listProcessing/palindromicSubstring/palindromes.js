function palindromes(sentence) {
  return getAllSubstrings(sentence).filter(isPalindrome);
}

function getAllSubstrings(sentence) {
  let allSubstrings = [];
  for (let i = 0; i < sentence.length - 1; i++) {
    let currentSubstring = sentence[i];
    if (currentSubstring === " ") continue;

    for (let j = i + 1; j < sentence.length; j++) {
      if (sentence[j] == " ") break;
      currentSubstring += sentence[j];
      allSubstrings.push(currentSubstring);
    }
  }
  return allSubstrings;
}

function isPalindrome(str) {
  let lIndex = 0;
  let rIndex = str.length - 1;

  while (lIndex < rIndex) {
    if (str[lIndex] !== str[rIndex]) {
      return false;
    }
    lIndex++;
    rIndex--;
  }

  return true;
}

console.log(palindromes("abcd")); // []
console.log(palindromes("madam")); // [ "madam", "ada" ]

console.log(palindromes("hello-madam-did-madam-goodbye"));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes("knitting cassettes"));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
