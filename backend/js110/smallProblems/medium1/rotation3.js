/*
 *
 * 735291
 * 352917 1
 *
 *
 *
 * 0 1 2 3 4 5 6 7 8 9
 * 8 7 0 3 5 2 9 1 4 6
 *
 * 1 3 5 7 9 2 6 0 8 4
 * 7 3 2 1 6 0 9 8 4 5
 *
 * 0 2 4 6 8
 * 8 2 4 6 0
 *
 * 735291  0
 * 352917  1
 * 329175 2
 * 329751 3
 * 329715 4
 * 329715
 *
 */

function rotateRightmostDigits(number, count) {
  let numString = String(number).split("");
  let idx = numString.length - count;

  while (idx < numString.length - 1) {
    [numString[idx], numString[idx + 1]] = [numString[idx + 1], numString[idx]];
    idx++;
  }
  return Number(numString.join(""));
}

function maxRotation(num) {
  let count = String(num).length;
  while (count >= 2) {
    num = rotateRightmostDigits(num, count);
    count--;
  }
  return num;
}

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3)); // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); // 7321609845
