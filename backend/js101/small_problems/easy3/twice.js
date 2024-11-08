function isDoubleNumber(num) {
  let stringNum = num.toString();
  let midIndex = stringNum.length / 2;

  return stringNum.substring(0, midIndex) === stringNum.substring(midIndex);
}
function twice(num) {
  return isDoubleNumber(num) ? num : num * 2;
}

console.log(twice(37)); // 74
console.log(twice(44)); // 44
console.log(twice(334433)); // 668866
console.log(twice(444)); // 888
console.log(twice(107)); // 214
console.log(twice(103103)); // 103103
console.log(twice(3333)); // 3333
console.log(twice(7676)); // 7676

// console.log(isDoubleNumber(44));
// console.log("107", isDoubleNumber(107));
// console.log("7676", isDoubleNumber(7676));
