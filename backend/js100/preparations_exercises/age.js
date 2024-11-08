let rlSync = require("readline-sync");

const STEPS_IN_YEARS = 10;
const IN_MAX_YEARS = 40;

function fromCurrentAge() {
  let currentAge = Number(rlSync.question("How old are you?\n"));

  console.log(`You are ${currentAge} years old.`);

  for (
    let years = STEPS_IN_YEARS;
    years <= IN_MAX_YEARS;
    years += STEPS_IN_YEARS
  ) {
    currentAge += STEPS_IN_YEARS;

    console.log(`In ${years} years, you will be ${currentAge} years old.`);
  }
}

fromCurrentAge();
