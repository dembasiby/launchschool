/*
 * Some people believe that Fridays that fall on the 13th day of the month
 * are unlucky days. Write a function that takes a year as an argument and
 * returns the number of Friday the 13ths in that year. You may assume that
 * the year is greater than 1752, which is when the United Kingdom adopted
 * the modern Gregorian Calendar. You may also assume that the same calendar
 * will remain in use for the foreseeable future.
 *
 * UNDERSTAND THE PROBLEM
 * Input:
 * - a single number representing a year in the gregorian calendar.
 * Output:
 * - the number of Fridays that are the 13th in the input year.
 * Mental model
 * - identify the first day of the year. iterate over the 365 days.
 *   For each day, check if it's Friday the date is 13.
 *
 * EXAMPLES / TEST CASES
 * - See below
 *
 * DATA STRUCTURES
 *
 *
 * ALGORITHM
 * Declare a constant `FRIDAY_NUM` and inititialize it to 5 (O-6 starting Sunday).
 * Declare a constant `THE_THIRTEENTH` and inititialize it to 13
 * Declare a variable `currentDate` and inititialize it to a new Date object
 * with the input year as argument.
 * Declare a variable `unluckyDaysCount` and inititialize it to 0
 * WHILE the year of currentDate is the input year,
 * - for each day, check the day and the date. If the day is Friday and the date is 13,
 *   increment `unluckyDaysCount` by 1
 * Return `unluckyDaysCount`
 *
 *
 *
 *
 * CODE
 */

function fridayThe13ths(year) {
  const FRIDAY_NUM = 5; // from 0, Sunday, to 6, Saturday
  const THE_THIRTEENTH = 13;

  let currentDate = new Date(String(year));
  let unluckyDaysCount = 0;

  while (currentDate.getFullYear() === year) {
    if (
      currentDate.getDate() === THE_THIRTEENTH &&
      currentDate.getDay() === FRIDAY_NUM
    ) {
      unluckyDaysCount++;
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return unluckyDaysCount;
}

function fridayThe13thsOneLiner(year) {
  return [...new Array(12)]
    .map((_, month) => new Date(year, month, 13))
    .reduce((count, date) => (date.getDay() === 5 ? count + 1 : count), 0);
}

console.log(fridayThe13ths(1986)); // 1
console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(2017)); // 2

console.log(fridayThe13thsOneLiner(1986)); // 1
console.log(fridayThe13thsOneLiner(2015)); // 3
console.log(fridayThe13thsOneLiner(2017)); // 2
