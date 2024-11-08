const DEGREE_TO_MINUTES = 60;
const MINUTE_TO_SECONDS = 60;
const MAX_STRING_LENGTH = 2;

function dms(angle) {
  let degree = Math.floor(angle);
  let rawMinutes = (angle - degree) * DEGREE_TO_MINUTES;
  let minutes = String(Math.floor(rawMinutes)).padStart(MAX_STRING_LENGTH, "0");
  let seconds = String(
    Math.floor((rawMinutes - minutes) * MINUTE_TO_SECONDS),
  ).padStart(MAX_STRING_LENGTH, "0");

  return `${degree}°${minutes}'${seconds}"`;
}

console.log(dms(30)); // 30°00'00"
console.log(dms(76.73)); // 76°43'48"
console.log(dms(254.6)); // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0)); // 0°00'00"
console.log(dms(360)); // 360°00'00" or 0°00'00"
