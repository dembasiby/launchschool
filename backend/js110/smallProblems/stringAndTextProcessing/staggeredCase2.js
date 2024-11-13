function staggeredCase(str) {
  let pointer = 0;

  return str
    .split("")
    .map((char) => {
      return /[a-zA-Z]/.test(char)
        ? pointer++ % 2 === 0
          ? char.toUpperCase()
          : char.toLowerCase()
        : char;
    })
    .join("");
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs",
);
