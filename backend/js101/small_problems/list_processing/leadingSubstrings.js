function leadingSubstrings(str) {
  // let ans = [];
  // let substr = "";
  //
  // for (let i = 0; i < str.length; i++) {
  //   substr += str[i];
  //   ans.push(substr);
  // }
  //
  // return ans;

  return str.split("").map((_, idx) => str.slice(0, idx + 1));
}

console.log(leadingSubstrings("abc")); // ["a", "ab", "abc"]
console.log(leadingSubstrings("a")); // ["a"]
console.log(leadingSubstrings("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
