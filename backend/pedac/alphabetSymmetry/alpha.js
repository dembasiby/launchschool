function solve(arr) {
  return arr.map(alphabetSymmetry);
}

function alphabetSymmetry(word) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  return word
    .split("")
    .filter((letter, idx) => alphabet.indexOf(letter.toLowerCase()) === idx)
    .length;
}
console.log(solve(["abode", "ABc", "xyzD"])); // [4,3,1]
console.log(solve(["abide", "ABc", "xyz"])); // [4,3,0]
console.log(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"])); // [6,5,7]
console.log(solve(["encode", "abc", "xyzD", "ABmD"])); // [1, 3, 1, 3]
