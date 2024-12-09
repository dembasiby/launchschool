const p = console.log;

function oddFellow(arr) {
  let result = 0;

  let occurrences = arr.reduce((obj, n) => {
    obj[n] = obj[n] + 1 || 1;
    return obj;
  }, {});

  arr.forEach((num) => {
    if (occurrences[num] % 2 !== 0) result = num;
  });

  return result;
}

p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);
