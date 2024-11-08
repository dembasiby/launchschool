function decode(myList) {
  let result = [];
  myList.forEach((message) =>
    result.push(numberOfLowerBetweenFirstTwoUpper(message)),
  );
  return result;
}

function numberOfLowerBetweenFirstTwoUpper(message) {
  let firstUpper = -1;
  let secondUpper = -1;

  for (let i = 0; i < message.length; i++) {
    if (firstUpper == -1 && isUpperCase(message[i])) {
      firstUpper = i;
    } else if (secondUpper == -1 && isUpperCase(message[i])) {
      secondUpper = i;
      break;
    }
  }

  if (firstUpper == -1 || secondUpper == -1) return 0;

  return secondUpper - firstUpper - 1;
}

function isUpperCase(letter) {
  return letter >= "A" && letter <= "Z";
}

console.log(decode(["ZoL", "heLlo", "XX"])); //  == [1, 0, 0]);
console.log(decode(["ZoL", "heLlo", "XX"]));
console.log(decode(["ZoL"]));
console.log(decode(["foUrsCoreAnd", "seven", ""])); // == [2, 0, 0]);
console.log(decode(["lucYintheskyWith", "dIaMonDs"])); // == [8, 1]);
console.log(decode([])); // == []);
