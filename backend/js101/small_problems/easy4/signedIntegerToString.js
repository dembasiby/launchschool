function integerToString(num) {
  if (num === 0) return "0";

  let ans = "";

  while (num) {
    ans = (num % 10) + ans;
    num = Math.floor(num / 10);
  }

  return ans;
}

function signedIntegerToString(num) {
  if (num === 0) {
    return Object.is(num, -0) ? "-0" : "0";
  }

  return num > 0 ? "+" + integerToString(num) : "-" + integerToString(-num);
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(-0) === "-0"); // logs true
