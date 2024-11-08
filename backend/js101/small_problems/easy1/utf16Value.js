function utf16Value(str) {
  return str
    .split("")
    .reduce((acc, _, index) => acc + str.charCodeAt(index), 0);
}

console.log(utf16Value("Four score"));
console.log(utf16Value("Launch School"));
console.log(utf16Value("a"));
console.log(utf16Value(""));

const OMEGA = "\u03A9"; // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA)); // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA)); // 2811
