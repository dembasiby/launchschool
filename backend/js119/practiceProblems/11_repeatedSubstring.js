const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

const repeatedSubstring = (str) => {
  for (let i = 0; i < str.length; i++) {
    let currentSubstr = str.slice(0, i + 1);
    let count = str.length / currentSubstr.length;

    if (currentSubstr.repeat(count) === str) {
      return [currentSubstr, count];
    }
  }
  return [str, 1];
};
p(repeatedSubstring("xyzxyzxyz"));

p(eq(repeatedSubstring("xyzxyzxyz"), ["xyz", 3]));
p(eq(repeatedSubstring("xyxy"), ["xy", 2]));
p(eq(repeatedSubstring("xyz"), ["xyz", 1]));
p(eq(repeatedSubstring("aaaaaaaa"), ["a", 8]));
p(eq(repeatedSubstring("superduper"), ["superduper", 1]));
