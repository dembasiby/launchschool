function reverseNumber(num) {
  let result = 0;

  while (num) {
    let remainder = num % 10;
    result = result * 10 + remainder;
    num = Math.floor(num / 10);
  }

  return result;
}

console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(12213)); // 31221
console.log(reverseNumber(456)); // 654
console.log(reverseNumber(12000)); // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1)); // 1
