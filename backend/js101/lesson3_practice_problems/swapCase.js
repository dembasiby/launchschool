function swapCase(str) {
  return str
    .split("")
    .map((char) => {
      return /[a-z]/.test(char) ? char.toUpperCase() : char.toLowerCase();
    })
    .join("");
}

let munstersDescription = "The Munsters are creepy and spooky.";

console.log(swapCase(munstersDescription));
