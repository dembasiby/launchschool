const readline = require("readline-sync");
const MESSAGES = require("./messages");

const MAX_LOAN_DURATION_IN_YEARS = 50;
const MAX_PERCENTAGE = 100;
const MONTHS_IN_A_YEAR = 12;

function prompt(message) {
  console.log(`=> ${message}`);
}

function isValid(number, condition) {
  return number >= 0 && number <= condition;
}

function getLoanDurationInMonths() {
  let loanDurationInMonths;

  while (!loanDurationInMonths) {
    let loanDuration = getValidNumber(
      MESSAGES.loanDurationInYears,
      MAX_LOAN_DURATION_IN_YEARS,
    );
    let additionalMonths = getValidNumber(
      MESSAGES.additionalMonths,
      MONTHS_IN_A_YEAR - 1,
    );
    loanDurationInMonths = loanDuration * MONTHS_IN_A_YEAR + additionalMonths;

    if (!loanDurationInMonths) {
      console.clear();
      prompt(MESSAGES.loanDurationCanNotBeZero);
    }
  }

  return loanDurationInMonths;
}

function getValidNumber(message, upperLimit = Number.MAX_SAFE_INTEGER) {
  prompt(message);
  let number = parseInt(readline.question());

  while (!isValid(number, upperLimit)) {
    prompt(MESSAGES.validNumber);
    number = parseInt(readline.question());
    console.clear();
  }

  return number;
}

function displayResults(
  monthlyPayment,
  loanDurationInMonths,
  totalPayment,
  loanAmount,
) {
  console.log();
  console.log("=====================================");
  prompt(`Montly Payment: ${monthlyPayment.toFixed(2)}`);
  prompt(
    `Total of ${loanDurationInMonths} payments: ${totalPayment.toFixed(2)}`,
  );
  prompt(`Total Interest: ${(totalPayment - loanAmount).toFixed(2)}`);
  console.log("=====================================");
  console.log();
}

let calculateAnotherLoanOption = true;
prompt(MESSAGES.greetings);

while (calculateAnotherLoanOption) {
  let loanAmount = getValidNumber(MESSAGES.loanAmount);

  // Loan amount cannot be 0
  if (loanAmount === 0) {
    console.clear();
    prompt(MESSAGES.validNumber);
    continue;
  }

  let loanDurationInMonths = getLoanDurationInMonths();

  let annualPercentageRate =
    getValidNumber(MESSAGES.APR, MAX_PERCENTAGE) / MAX_PERCENTAGE;

  let monthlyInterestRate = annualPercentageRate / MONTHS_IN_A_YEAR;

  let monthlyPayment =
    loanAmount *
    (monthlyInterestRate /
      (1 - (1 + monthlyInterestRate) ** -loanDurationInMonths));
  monthlyPayment ||= loanAmount / loanDurationInMonths; // In case of 0% interest rate
  let totalPayment = monthlyPayment * loanDurationInMonths;

  displayResults(
    monthlyPayment,
    loanDurationInMonths,
    totalPayment,
    loanAmount,
  );

  calculateAnotherLoanOption =
    readline
      .question(MESSAGES.anotherCalculation)
      .trim()
      .slice(0, 1)
      .toLowerCase() === "y";

  console.clear();
}

prompt(MESSAGES.thankYou);
