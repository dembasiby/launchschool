const getLists = require("./getLists");
let tolerateCount = 0;

function isAscending(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      if (tolerateCount > 0) return false;
      tolerateCount++;
    }
  }

  return true;
}

function isDescending(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
      if (tolerateCount > 0) return false;
      tolerateCount++;
    }
  }

  return true;
}

function distanceIsSafe(arr) {
  for (let i = 1; i < arr.length; i++) {
    let diff = Math.abs(arr[i] - arr[i - 1]);
    if (diff < 1 || diff > 3) {
      if (tolerateCount > 0) return false;
      tolerateCount++;
    }
  }
  return true;
}

function isSafe(arr) {
  let ascend = isAscending(arr);
  let descend = isDescending(arr);

  if ((ascend || descend) && tolerateCount === 0) return distanceIsSafe(arr);
  let dist = distanceIsSafe(arr);
  return dist && tolerateCount <= 1;
}

function processInputs() {
  (async () => {
    try {
      let { lists } = await getLists("./input.txt");

      let count = 0;

      lists.forEach((list) => {
        if (isSafe(list)) count++;
      });
      console.log("count: ", count);
    } catch (error) {
      console.error("Error processing the file: ", error);
    }
  })();
}

processInputs();
