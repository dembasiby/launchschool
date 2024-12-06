function palindrome(number, count) {
  if (count === 0) return [];
  let result = [];

  if (number < 10) number = 10;

  while (result.length < count) {
    let stringNum = String(number);
    if (stringNum === stringNum.split("").reverse().join("")) {
      result.push(number);
    }
    number++;
  }

  return result;
}

console.log(palindrome(6, 4));
console.log(palindrome(75, 1));
console.log(palindrome(101, 2));
console.log(palindrome(101, 0));
console.log(palindrome(0, 4));
