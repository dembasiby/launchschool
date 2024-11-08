function getRandomAge(minAge, maxAge) {
  if (minAge > maxAge) {
    [minAge, maxAge] = [maxAge, minAge];
  }

  return Math.floor(Math.random() * (maxAge - minAge + 1) + minAge);
}

console.log(`Teddy is ${getRandomAge(20, 120)} years old!`);
console.log(`Teddy is ${getRandomAge(120, 20)} years old!`);
console.log(`Teddy is ${getRandomAge(10, 5)} years old!`);
console.log(`Teddy is ${getRandomAge(5, 10)} years old!`);
