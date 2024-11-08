let destinations = [
  "Prague",
  "London",
  "Sydney",
  "Belfast",
  "Rome",
  "Aruba",
  "Paris",
  "Bora Bora",
  "Barcelona",
  "Rio de Janeiro",
  "Marrakesh",
  "New York City",
];

function contains(arr, element) {
  for (let el of arr) {
    if (el === element) return true;
  }

  return false;
}

console.log(contains(destinations, "Barcelona"));
console.log(contains(destinations, "Nashville"));
