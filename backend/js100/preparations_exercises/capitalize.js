function capitalize(phrase) {
  return phrase
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1)) // if the word is only 1 letter, JS will ignore substring[>length];
    .join(" ");
}

console.log(capitalize("launch school tech & talk"));
console.log(capitalize("make sure it's a somewhat good solution"));
