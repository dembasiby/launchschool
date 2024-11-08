function stringy(num) {
  let ans = "10".repeat(num / 2);

  return num % 2 === 0 ? ans : ans.concat(1);
}

console.log(stringy(6)); // "101010"
console.log(stringy(9)); // "101010101"
console.log(stringy(4)); // "1010"
console.log(stringy(7)); // "1010101"
