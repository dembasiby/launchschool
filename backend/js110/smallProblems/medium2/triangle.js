function triangle(s1, s2, s3) {
  if (s1 === s2 && s2 === s3) return "equilateral";
  if (s1 === s2 && s2 !== s3) return "isosceles";
  if (s1 !== s2 && s2 !== s3 && s1 !== s3) return "scalene";

  return "invalid";
}

function isValidTriangle(s1, s2, s3) {}

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"
