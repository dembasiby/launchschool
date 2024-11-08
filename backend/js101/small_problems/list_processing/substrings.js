function substrings(str) {
  let ans = [];

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    ans.push(curr);

    for (let j = i + 1; j < str.length; j++) {
      curr += str[j];
      ans.push(curr);
    }
  }

  return ans;
}

console.log(substrings("abcde"));
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
