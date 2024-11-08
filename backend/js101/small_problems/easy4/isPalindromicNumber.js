function isPalindromicNumber(num) {
  let num2 = 0,
    copy = num;

  while (copy) {
    num2 = num2 * 10 + (copy % 10);
    copy = Math.floor(copy / 10);
  }

  return num === num2;
}

console.log(isPalindromicNumber(34543)); // true
console.log(isPalindromicNumber(123210)); // false
console.log(isPalindromicNumber(22)); // true
console.log(isPalindromicNumber(5)); // true
console.log(isPalindromicNumber(005)); // true
