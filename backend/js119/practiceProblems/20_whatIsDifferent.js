const p = console.log;

function whatIsDifferent(arr) {
  let occurrences = arr.reduce((obj, n) => {
    obj[n] = obj[n] + 1 || 1;
    return obj;
  }, {});

  return arr.filter((num) => occurrences[num] === 1)[0];
}

p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);
