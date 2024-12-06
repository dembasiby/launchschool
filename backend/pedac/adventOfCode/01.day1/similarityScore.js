function getSimilarityScore(list1, list2) {
  let uniques = list1.reduce((obj, n) => {
    if (!(n in obj)) {
      obj[n] = 0;
    }
    return obj;
  }, {});

  for (let n of list2) {
    if (n in uniques) {
      uniques[n] += 1;
    }
  }

  return list1.reduce((acc, n) => {
    let score = n in uniques ? n * uniques[n] : 0;
    return acc + score;
  }, 0);
}

module.exports = getSimilarityScore;
