const readNumbersFromFile = require("./readNumbersFromFile");
// const processLists = require("./processLists");
const getSimilarityScore = require("./similarityScore");

function totalDistance() {
  (async () => {
    try {
      let { list1, list2 } = await readNumbersFromFile("./input.txt");
      let result = getSimilarityScore(list1, list2);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  })();
}

totalDistance();
