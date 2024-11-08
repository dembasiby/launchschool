const rlSync = require("readline-sync");

// What is the bill? 200
// What is the tip percentage? 15
//
// The tip is $30.00
// The total is $230.00
//
function getTip(bill, tipPercentage) {
  return bill * (tipPercentage / 100);
}

function operation() {
  console.log("What is the bill?");
  let bill = Number.parseFloat(rlSync.prompt());

  console.log("What is the tip percentage?");
  let tipPercentage = Number.parseInt(rlSync.prompt());

  let tip = getTip(bill, tipPercentage);

  let totalBill = bill + tip;

  console.log(`The tip is ${tip.toFixed(2)}`);
  console.log(`The total is ${totalBill.toFixed(2)}`);
}

operation();
