function joinOr(arr, delimiter = ", ", joiningWord = "or") {
  if (arr.length <= 1) return arr.join();
  if (arr.length === 2) return arr.join(` ${joiningWord} `);

  let result = arr.slice(0, -1).join(delimiter);
  result += `${delimiter}${joiningWord} ${arr.slice(-1)}`;

  return result;
}

console.log(joinOr([1, 2, 3])); // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], "; ")); // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ", ", "and")); // => "1, 2, and 3"
console.log(joinOr([])); // => ""
console.log(joinOr([5])); // => "5"
console.log(joinOr([1, 2])); // => "1 or 2":w
