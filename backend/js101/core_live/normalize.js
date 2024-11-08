// Write a function that, given user info that may be `null`, populates
// any missing info using short-circuiting logic.
//
// const MAX_HUMAN_AGE = 150;
//
function isValidAge(age) {
  return age === 0 || age > 0;
}

// Still lacking input validation
function normalize(name, age, email) {
  return {
    name: name || "John Doe",
    age: isValidAge(age) ? age : "Unknown",
    email: email || "Unknown",
  };
}
console.log(normalize("Marcy", null, null));
// { name: 'Marcy', age: 'Unknown', email: 'Unknown' }
console.log(normalize(null, null, "best.user@gmail.com"));
// { name: 'Jane Doe', age: 'Unknown', email: 'best.user@gmail.com' }

console.log(normalize(null, 0, "best.user@gmail.com"));
// { name: 'Jane Doe', age: 0, email: 'best.user@gmail.com' }

console.log(normalize(null, -4, "best.user@gmail.com"));
// { name: 'Jane Doe', age: 'Unknown', email: 'best.user@gmail.com' }

//// Bonus Questions ////
// 1. What happens if we pass in 0 for the `age`?
// 2. What if we pass in a negative number for the `age`?
// 3. How might we improve our function to allow for people age 0?
//   Can you make these improvements while still using short-circuiting?
