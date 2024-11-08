// leap years occur in every year that is evenly divisible by 4,
// unless the year is also divisible by 100. If the year is evenly
// divisible by 100, then it is not a leap year, unless the year
// is also evenly divisible by 400.
//
const GREGORIAN_CALENDAR_ADOPTION_YEAR = 1752;

function isLeapYear(year) {
  if (year < GREGORIAN_CALENDAR_ADOPTION_YEAR) {
    return year % 4 === 0;
  }

  let isLeap = year % 4 === 0;
  isLeap = isLeap && year % 100 !== 0;
  isLeap = isLeap || year % 400 === 0;

  return isLeap;
}

console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2015)); // false
console.log(isLeapYear(2100)); // false
console.log(isLeapYear(2400)); // true
console.log(isLeapYear(240000)); // true
console.log(isLeapYear(240001)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(1752)); // true
console.log(isLeapYear(1700)); // true
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // true
console.log(isLeapYear(400)); // true
