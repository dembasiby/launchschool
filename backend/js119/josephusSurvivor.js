/*
 * UNDERSTAND THE PROBLEM
 *
 * Input:
 * two numbers, n, the number of people,
 * and k, the sequence to be eliminated in each iteration.
 * n represent the number of people from 1 to n
 *
 * Output:
 * a number representing the number of the person that is left alive after all
 * the other people are eliminated
 *
 * Rules
 * - starting from the first person, each k person is eliminated
 * until there is only person left. We return the number of
 * that person
 * - eliminated persons are not counted for subsequent cycles
 * - if n is 1, return 1 if k is greater than 0opem,
 *
 * EXAMPLE
 * n=7, k=3
 * [-1, -2, -3, 4, -5, -6, 7]
 * [-1, -2, -3, 4, -5, -6, -7]
 *
 * DATA STRUCTURE
 * - an array from 1 to n representing the number of each of the n people.
 *
 * ALGORITHM
 * - Declare a variable `index` and inittialize it to 0
 * - Declare a variable `currentCount` and inittialize it to 0
 * - Declare a variable `positiveCount` and inittialize it to n
 * - Declare a variable `arr` and inittialize it to an empty array
 * - Populate `arr` with numbers from 1 to n included
 * - WHILE `positiveCount` is greater than 2
 *   - if `arr` element at index `index` is positive
 */
function josephusSurvivor(n, k) {
  let index = 0;
  let arr = [];
  let positiveCount = n;
  let currentCount = 0;
  // k = k % n;

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  while (positiveCount >= 2) {
    if (arr[index] > 0) {
      if (currentCount === k - 1) {
        arr[index] = -arr[index];
        positiveCount--;
        currentCount = 0;
      } else {
        currentCount++;
      }
    }
    index++;
    index %= n;
  }

  console.log(arr);
}

console.log(josephusSurvivor(7, 3)); //,4)
console.log(josephusSurvivor(11, 19)); //,10)
console.log(josephusSurvivor(1, 300)); //,1)
console.log(josephusSurvivor(14, 2)); //,13)
console.log(josephusSurvivor(100, 1)); //,100)
