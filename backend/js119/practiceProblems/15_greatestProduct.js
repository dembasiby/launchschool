const p = console.log;

function greatestProduct(str) {
  let result = 0;

  for (let i = 0; i < str.length - 3; i++) {
    let prod = str
      .slice(i, i + 4)
      .split("")
      .reduce((p, s) => p * Number(s), 1);
    result = Math.max(result, prod);
  }

  return result;
}

p(greatestProduct("23456") === 360); // 3 * 4 * 5 * 6
p(greatestProduct("3145926") === 540); // 5 * 9 * 2 * 6
p(greatestProduct("1828172") === 128); // 1 * 8 * 2 * 8
p(greatestProduct("123987654") === 3024); // 9 * 8 * 7 * 6
