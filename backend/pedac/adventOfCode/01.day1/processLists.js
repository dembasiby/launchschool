function processLists(list1, list2) {
  list1.sort((a, b) => a - b);
  list2.sort((a, b) => a - b);

  let interm = [];

  for (let i = 0; i < list1.length; i++) {
    interm[i] = Math.abs(list1[i] - list2[i]);
  }

  return interm.reduce((acc, n) => acc + n, 0);
}

module.exports = processLists;
