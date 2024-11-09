function bouncyCount(arr) {
  return arr.filter((num) => isBouncy(String(num).split(""))).length;
}

function isBouncy(stringArr) {
  if (stringArr.length < 3) return 0;

  let ascendingCount = sortDirectionCount(stringArr);
  let descendingCount = sortDirectionCount(stringArr, false);

  return ascendingCount >= 1 && descendingCount >= 1;
}

function sortDirectionCount(stringArr, ascending = true) {
  let directionCount = 0;
  let currentDirectionCount = 0;

  for (let i = 1; i < stringArr.length; i++) {
    if (ascending && stringArr[i] > stringArr[i - 1]) {
      currentDirectionCount++;
    } else if (!ascending && stringArr[i] < stringArr[i - 1]) {
      currentDirectionCount++;
    } else {
      if (currentDirectionCount >= 1) {
        directionCount++;
        currentDirectionCount = 0;
      }
    }
  }

  if (currentDirectionCount >= 1) directionCount++;

  return directionCount;
}

console.log(bouncyCount([121, 4114]));
console.log(bouncyCount([176, 442, 80701644]));

console.log(bouncyCount([]) === 0);
console.log(bouncyCount([11, 0, 345, 21]) === 0);
console.log(bouncyCount([121, 4114]) === 2);
console.log(bouncyCount([176, 442, 80701644]) === 2);
