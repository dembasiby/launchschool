function expanded_form(num) {
  let pow = 1;
  let ans = "";

  while (num) {
    let temp = num % 10;
    temp *= pow;

    if (temp !== 0) {
      ans = ans.length === 0 ? temp : `${temp} + ${ans}`;
    }

    pow *= 10;
    num = Math.floor(num / 10);
  }

  return ans;
}

console.log(expanded_form(12));

console.log(expanded_form(12) == "10 + 2");
console.log(expanded_form(42) == "40 + 2");
console.log(expanded_form(70304) == "70000 + 300 + 4");
console.log(expanded_form(70304));
console.log(expanded_form(70050));
console.log(expanded_form(0));
