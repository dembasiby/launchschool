/*
 * UNDERSTAND THE PROBLEM
 * Input:
 *
 * Output:
 *
 * Rules:
 *
 * Mental Model
 *
 * EXAMPLES
 *
 * DATA STRUCTURE
 *
 * ALGORITHM
 *
 * CODE
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

console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917
