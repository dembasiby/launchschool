function cleanUp(string) {
  return string.replace(/[^a-zA-Z]+/g, " ");
}

console.log(cleanUp("---what's my +*& line?"));
