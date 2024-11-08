const IP_ADDRESS_PARTS = 4;

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  if (dotSeparatedWords.length !== IP_ADDRESS_PARTS) return false;

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

console.log("10.4.5.11 is valid? ", isDotSeparatedIpAddress("10.4.5.11"));
console.log("4.5.5 is valid? ", isDotSeparatedIpAddress("4.5.5"));
console.log("1.2.3.11.65 is valid? ", isDotSeparatedIpAddress("1.2.3.11.65"));
console.log("550.2.3.11 is valid? ", isDotSeparatedIpAddress("550.2.3.11"));
