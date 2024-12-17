function binarySearch(arr, element) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === element) {
      return mid;
    } else if (arr[mid] > element) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

let yellowPages = [
  "Apple Store",
  "Bags Galore",
  "Bike Store",
  "Donuts R Us",
  "Eat a Lot",
  "Good Food",
  "Pasta Place",
  "Pizzeria",
  "Tiki Lounge",
  "Zooper",
];
console.log(binarySearch(yellowPages, "Pizzeria")); // 7
console.log(binarySearch(yellowPages, "Apple Store")); // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77)); // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89)); // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5)); // 1

console.log(
  binarySearch(
    ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"],
    "Peter",
  ),
); // -1
console.log(
  binarySearch(
    ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"],
    "Tyler",
  ),
); // 6
