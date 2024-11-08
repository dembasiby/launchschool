function sum(num) {
  let total = 0;

  while (num) {
    total += num % 10;
    num = Math.floor(num / 10);
  }

  return total;
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));
console.log(sum(123435435345597341461947314136419473219432));
