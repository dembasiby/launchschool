function cleanString(s) {
  while (s.includes("#")) {
    s = /[a-zA-Z]#/.test(s) ? s.replace(/[a-zA-Z]#/, "") : s.replace("#", "");
  }
  return s;
}

console.log(cleanString("abc#d##c"));
