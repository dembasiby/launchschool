console.log(true);
console.log(false);

function makeLonger(string, longer) {
  if (longer) {
    return string + string;
  }

  return string;
}

console.log(makeLonger("abc", true));
console.log(makeLonger("xyz", false));

function isDigit(char) {
  return char >= "0" && char <= "9";
}

console.log(isDigit("5"));
console.log(isDigit("a"));
