function afterMidnight(str) {
  let timeArr = str.split(":");
  return timeArr[0] * 60 + 1 * timeArr[1];
}

function beforeMidnight(str) {}

console.log(afterMidnight("00:00") === 0);
// console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
// console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
// console.log(beforeMidnight("24:00") === 0);
console.log(afterMidnight("24:00"));
