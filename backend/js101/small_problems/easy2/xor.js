function xor(value1, value2) {
  return (Boolean(value1) ^ Boolean(value2)) === 1;
}

console.log(xor(5, 0) === true); // true
console.log(xor(false, true) === true); // true
console.log(xor(1, 1) === false); // true
console.log(xor(true, true) === false); // true
console.log(xor(0, false) === false); // true
console.log(xor(0, 0) === false); // true
console.log(xor("a", false) === true); // true
