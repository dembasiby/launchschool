function integerToString(num) {
  if (num === 0) return "0";

  let ans = "";

  while (num) {
    ans = (num % 10) + ans;
    num = Math.floor(num / 10);
  }

  return ans;
}

console.log(integerToString(4321)); // "4321"
console.log(integerToString(0)); // "0"
console.log(integerToString(5000)); // "5000"
console.log(integerToString(1234567890)); // "1234567890"
