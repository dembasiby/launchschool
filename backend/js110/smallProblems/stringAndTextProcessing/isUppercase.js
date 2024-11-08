function isUppercase(str) {
  return str.split("").every((char) => {
    return /[^a-zA-Z]/.test(char) || /[A-Z]/.test(char);
  });
}

console.log(isUppercase("t")); // false
console.log(isUppercase("T")); // true
console.log(isUppercase("Four Score")); // false
console.log(isUppercase("FOUR SCORE")); // true
console.log(isUppercase("4SCORE!")); // true
console.log(isUppercase("")); // true
