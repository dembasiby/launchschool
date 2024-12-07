const p = console.log;

const unscramble = (str1, str2) => {
  let obj1 = str1.split("").reduce((obj, char) => {
    obj[char] = obj[char] + 1 || 1;
    return obj;
  }, {});

  let obj2 = str2.split("").reduce((obj, char) => {
    obj[char] = obj1[char] + 1 || 1;
    return obj;
  }, {});

  for (let char in obj2) {
    if (!obj1[char] || obj2[char] < obj1[char]) return false;
  }

  return true;
};

p(unscramble("ansucchlohlo", "launchschool") === true);
p(unscramble("phyarunstole", "pythonrules") === true);
p(unscramble("phyarunstola", "pythonrules") === false);
p(unscramble("boldface", "coal") === true);
