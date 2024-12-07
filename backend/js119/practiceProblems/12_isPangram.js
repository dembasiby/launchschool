const p = console.log;
const isPangram = (str) => {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  let sortedStr = str
    .split("")
    .map((c) => c.toLowerCase())
    .filter((c) => /[a-z]/.test(c))
    .sort();

  return sortedStr
    .filter((char, idx) => sortedStr.indexOf(char) === idx)
    .every((char, idx) => ALPHABET.indexOf(char) === idx);
};

p(isPangram("The quick, brown fox jumps over the lazy dog!") === true);
p(isPangram("The slow, brown fox jumps over the lazy dog!") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

let myStr = "Sixty zippers were quickly picked from the woven jute bag.";
p(isPangram(myStr) === true);
