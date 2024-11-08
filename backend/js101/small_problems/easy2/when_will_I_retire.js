const rlSync = require("readline-sync");

let currentAge = Number.parseInt(rlSync.question("What is your age?\n"));

let retirementAge = Number.parseInt(
  rlSync.question("At what age would you like to retire?\n"),
);

let currentYear = new Date().getFullYear();
let retirementYear = retirementAge - currentAge + currentYear;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}`);
console.log(
  `You only have ${retirementYear - currentYear} years of work to go!`,
);
