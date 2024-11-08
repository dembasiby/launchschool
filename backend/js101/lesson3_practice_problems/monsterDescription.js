function getMunstersDescription(str) {
  return str
    .split(" ")
    .map((word, idx) => {
      return idx === 0
        ? word[0].toUpperCase() + word.slice(1).toLowerCase()
        : word.toLowerCase();
    })
    .join(" ");
}

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
console.log(getMunstersDescription(munstersDescription));
