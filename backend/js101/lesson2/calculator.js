"use strict";

const readline = require("readline-sync");
const messages = require("./config");

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function isValidNumber(number) {
  return number.trimLeft() !== "" && !Number.isNaN(Number(number));
}

function isValidOperation(operation) {
  return ["1", "2", "3", "4"].includes(operation);
}

function getValidNumber(message) {
  prompt(message);
  let number = readline.question();

  while (!isValidNumber(number)) {
    prompt(messages.validNumber[language]);
    number = readline.question();
  }

  return Number(number);
}

function getResults(firstNumber, secondNumber, operation) {
  const operations = {
    1: (a, b) => a + b,
    2: (a, b) => a - b,
    3: (a, b) => a * b,
    4: (a, b) => (b !== 0 ? a / b : "undefined"),
  };

  return operations[operation](firstNumber, secondNumber);
}

function getOperator(operation) {
  switch (operation) {
    case "1":
      return "+";
    case "2":
      return "-";
    case "3":
      return "*";
    case "4":
      return "/";
  }
}

prompt(messages.language);
let language = readline.question();

language = ["en", "fr", "es"].includes(language) ? language : "en"; // default language is english

prompt(messages.welcome[language]);

let continueCalculation = true;

while (continueCalculation) {
  let firstNumber = getValidNumber(messages.firstNumber[language]);
  let secondNumber = getValidNumber(messages.secondNumber[language]);

  prompt(messages.typeOfOperation[language]);
  let operation = readline.question();

  while (!isValidOperation(operation)) {
    prompt(messages.validOperator[language]);
    operation = readline.question();
  }

  let result = getResults(firstNumber, secondNumber, operation);

  prompt(
    `${messages.result[language]} ${firstNumber.toLocaleString()} ${getOperator(operation)} ${secondNumber.toLocaleString()} = ${result.toLocaleString()}`,
  );
  prompt("************************************************");
  prompt("");

  prompt(messages.anotherOperation[language]);
  continueCalculation = readline.question() === "1";
}

prompt(messages.thankYou[language]);
