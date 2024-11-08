const rlSync = require("readline-sync");

function sumBetweenOneAndN(number) {
  return (number * (number + 1)) / 2;
}

function productBetweenOneAndN(num) {
  let total = 1;

  while (num) {
    total *= num;
    num--;
  }

  return total;
}

function printMessage(operation, limit, total) {
  console.log(
    `The ${operation} of the integers between 1 and ${limit} is ${total}.`,
  );
}

function proceedToOperation() {
  try {
    console.log("Please enter a number greater than 0: ");
    let number = Number.parseInt(rlSync.prompt());

    if (number <= 0 || Number.isNaN(number))
      throw new Error("Number should be greater than 0");

    console.log(
      'Enter "s" to compute the sum, or "p" to compute the product: ',
    );
    let operation = rlSync.prompt().toLowerCase();

    switch (operation) {
      case "s":
        printMessage("sum", number, sumBetweenOneAndN(number));
        break;
      case "p":
        printMessage("product", number, productBetweenOneAndN(number));
        break;
      default:
        throw new Error("Invalid operation");
    }
  } catch (error) {
    console.log(error);
  }
}

proceedToOperation();
