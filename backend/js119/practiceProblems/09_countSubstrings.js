const p = console.log;

const countSubstrings = (str, sub) => {
  let result = 0;

  for (let i = 0; i < str.length - sub.length + 1; i += 1) {
    let substr = str.slice(i, i + sub.length);
    if (substr === sub) {
      result++;
      i += sub.length - 1;
    }
  }

  return result;
};

p(countSubstrings("babab", "bab") === 1);
p(countSubstrings("babab", "ba") === 2);
p(countSubstrings("babab", "b") === 3);
p(countSubstrings("babab", "x") === 0);
p(countSubstrings("babab", "x") === 0);
p(countSubstrings("", "x") === 0);
p(countSubstrings("bbbaabbbbaab", "baab") === 2);
p(countSubstrings("bbbaabbbbaab", "bbaab") === 2);
p(countSubstrings("bbbaabbbbaabb", "bbbaabb") === 1);
