/*
 * Input: an array of number
 * Output: a number representing the smallest integer which
 * addition to the sum of the array make it a prime.
 *
 * Rules:
 *
 * Mental model:
 * get sum of array element
 * if the sum is positive, add 1 first, check and then increment by 2
 * else increment by 2 until next prime found
 *
 *
 *
 */

const p = console.log;

function isPrime(num) {
  if (num === 2) return true;
  if (num < 2 || num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

function nearestPrimeSum(arr) {
  let arrSum = arr.reduce((sum, n) => sum + n, 0);
  let primeSum = arrSum % 2 === 0 ? arrSum + 1 : arrSum + 2;

  while (!isPrime(primeSum)) {
    primeSum += 2;
  }

  return primeSum - arrSum;
}

p(nearestPrimeSum([1, 2, 3]) === 1); // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4); // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2); // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]));
