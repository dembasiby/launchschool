function crunch(str) {
  // input validation logic here.
  return str
    .split("")
    .filter((char, idx) => idx === 0 || str[idx - 1] !== char)
    .join("");
}

console.log(crunch("ddaaiillyy ddoouubbllee")); // "daily double"
console.log(crunch("4444abcabccba")); // "4abcabcba"
console.log(crunch("ggggggggggggggg")); // "g"
console.log(crunch("a")); // "a"
console.log(crunch("")); // ""
