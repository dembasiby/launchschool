function isConsonnant(char) {
  return /[a-zA-Z]/.test(char) && !"aeiuoAEIUO".includes(char);
}
function doubleConsonants(str) {
  return str
    .split("")
    .map((char) => {
      return isConsonnant(char) ? char + char : char;
    })
    .join("");
}

console.log(doubleConsonants("String")); // "SSttrrinngg"
console.log(doubleConsonants("Hello-World!")); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants("July 4th")); // "JJullyy 4tthh"
console.log(doubleConsonants("")); // ""
