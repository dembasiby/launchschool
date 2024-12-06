const p = console.log;
const longestVowelSubstring = (str) => {
  let maxSubstringLength = 0;
  let currentSubstr = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (/[aeuioy]/.test(char)) {
      currentSubstr += char;

      if (currentSubstr.length > maxSubstringLength) {
        maxSubstringLength = currentSubstr.length;
      }
    } else {
      currentSubstr = "";
    }
  }

  return maxSubstringLength;
};

p(longestVowelSubstring("cwm") === 0);
p(longestVowelSubstring("many") === 1);
p(longestVowelSubstring("launchschoolstudents") === 2);
p(longestVowelSubstring("eau") === 3);
p(longestVowelSubstring("beauteous") === 3);
p(longestVowelSubstring("sequoia") === 4);
p(longestVowelSubstring("miaoued") === 5);
