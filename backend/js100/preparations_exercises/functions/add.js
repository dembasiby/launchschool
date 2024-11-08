function add(left, right) {
  left = left ?? 0;
  right = right ?? 0;

  let sum = left + right;
  return sum;
}

console.log(add(3, 6, 5));
console.log(add(3));
console.log(add());
