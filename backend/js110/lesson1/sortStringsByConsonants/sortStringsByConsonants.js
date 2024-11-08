function sortStringsByConsonants(arr) {
  return arr.slice().sort((a, b) => {
    return countMaxAdjacentConsonants(b) - countMaxAdjacentConsonants(a);
  });
}

function countMaxAdjacentConsonants(str) {
  const VOWELS = "aeiuo";

  let count = 0;
  let finalConsonantCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (/\s/.test(str[i])) {
      continue;
    } else if (!VOWELS.includes(str[i])) {
      count++;
    } else {
      if (count > 1) {
        finalConsonantCount = Math.max(finalConsonantCount, count);
      }
      count = 0;
    }
  }

  if (count > 1) {
    finalConsonantCount = Math.max(finalConsonantCount, count);
  }

  return finalConsonantCount;
}

// console.log(countMaxAdjacentConsonants("dddaa")); // 3
// console.log(countMaxAdjacentConsonants("ccaa")); // 2
// console.log(countMaxAdjacentConsonants("baa")); // 0
// console.log(countMaxAdjacentConsonants("aa")); // 0

let list1 = ["aa", "baa", "ccaa", "dddaa"];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ["can can", "toucan", "batman", "salt pan"];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ["bar", "car", "far", "jar"];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ["day", "week", "month", "year"];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']
