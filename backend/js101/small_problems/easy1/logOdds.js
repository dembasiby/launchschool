// Log odd numbers from 1 to 99
//
function logOdds(limit) {
  for (let index = 1; index <= limit; index += 2) {
    console.log(index);
  }
}

logOdds(99);

/*
 * We can use while loop for the same exercise
 * let index = 1;
 * while (index <= limit) {
 * console.log(index);
 * index += 2;
 * }
 *
 * do {
 * console.log(index);
 } while (index <= limit);
 *
 */
