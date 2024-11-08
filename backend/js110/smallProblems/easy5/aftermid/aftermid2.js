const NUMBER_OF_MINUTES_PER_DAY = 1440;
const NUMBER_OF_MINUTES_PER_HOUR = 60;

function getMinutes(time) {
  let [hours, minutes] = time.split(":");
  let totalMinutes = hours * NUMBER_OF_MINUTES_PER_HOUR + minutes * 1;
  return totalMinutes;
}
function afterMidnight(time) {
  return getMinutes(time) % NUMBER_OF_MINUTES_PER_DAY;
}

function beforeMidnight(time) {
  let totalMinutes = getMinutes(time);
  return (NUMBER_OF_MINUTES_PER_DAY - totalMinutes) % NUMBER_OF_MINUTES_PER_DAY;
}

console.log("24:00", afterMidnight("24:00"));
console.log("12:34", beforeMidnight("12:34"));
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
